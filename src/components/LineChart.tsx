import React, { useContext, useState, useEffect } from 'react'
import { WeekContext } from '../context/week'
import { WeightContext } from '../context/weight'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {
  const { weeks } = useContext(WeekContext)
  const { weights } = useContext(WeightContext)
  const [sortedWeeks, setSortedWeeks] = useState([])

  useEffect(() => {
    if (weeks && weeks.length !== 0) {
      setSortedWeeks(weeks.reverse())
    }
  }, [weeks, sortedWeeks])

  const startingDates = sortedWeeks.slice(0, 8).map((week: any) => week.date)

  return (
    <div>
      {sortedWeeks && weights && (
        <Line
          data={{
            labels: startingDates,
            datasets: [
              {
                label: 'Starting Weight',
                data:
                  weights &&
                  weights
                    .slice(0, 8)
                    .map((weight: any) => weight.currentWeight),
                backgroundColor: 'red',
                borderWidth: 1,
                borderColor: 'red',
              },
              {
                label: 'Goal',
                data:
                  weights &&
                  weights.slice(0, 8).map((weight: any) => weight.goalWeight),
                backgroundColor: '#1f805e',
                borderWidth: 1,
                borderColor: '#1f805e',
              },
              {
                label: 'Actual',
                data:
                  weights &&
                  weights
                    .slice(0, 8)
                    .map((weight: any) => weight.achievedWeight),
                backgroundColor: 'orange',
                borderWidth: 1,
                borderColor: 'orange',
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  )
}

export default LineChart
