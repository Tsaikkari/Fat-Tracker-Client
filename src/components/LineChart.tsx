import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/types'
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
  const weeks = useSelector((state: AppState) => state.weeks.list)
  const weights = weeks.map((week: any) => week.weights)
  const [sortedWeeks, setSortedWeeks] = useState<any[]>([])

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
