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

  const startingDates = sortedWeeks.map((week: any) => week.date)

  return (
    <div>
      {sortedWeeks && weights &&
      <Line
        data={{
          labels: startingDates,
          datasets: [
            {
              label: 'Starting Weight',
              data: weights && weights.map((weight: any) => weight.currentWeight),
              backgroundColor: 'red',
              borderWidth: 1,
            },
            {
              label: 'Goal Weight',
              data: weights && weights.map((weight: any) => weight.goalWeight),
              backgroundColor: 'green',
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />}
    </div>
  )
}

export default LineChart
