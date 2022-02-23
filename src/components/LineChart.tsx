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
  const [sortedWeights, setSortedWeights] = useState<any[]>([])

  useEffect(() => {
    if (weeks && weeks.length !== 0) {
      setSortedWeeks(weeks.reverse())
      setSortedWeights(weights.reverse())
    }
    //eslint-disable-next-line
  }, [])

  const startingDates = sortedWeeks.slice(0, 8).map((week: any) => week.date)

  return (
    <>
      <div>
        {weeks.length !== 0 && weights ? (
          <Line
            data={{
              labels: startingDates,
              datasets: [
                {
                  label: 'Starting Weight',
                  data:
                    sortedWeights &&
                    sortedWeights
                      .slice(0, 8)
                      .map((weight: any) => weight.currentWeight),
                  backgroundColor: 'red',
                  borderWidth: 1,
                  borderColor: 'red',
                },
                {
                  label: 'Goal',
                  data:
                    sortedWeights &&
                    sortedWeights
                      .slice(0, 8)
                      .map((weight: any) => weight.goalWeight),
                  backgroundColor: '#1f805e',
                  borderWidth: 1,
                  borderColor: '#1f805e',
                },
                {
                  label: 'Actual',
                  data:
                    sortedWeeks &&
                    sortedWeeks
                      .slice(0, 8)
                      .map((week: any) => week.achievedWeight),
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
        ) : (
          <div className='py-3'>
            <p>Please, add your weights on the week page</p>
          </div>
        )}
      </div>
      <div>
        {weeks.length !== 0 && weights ? (
          <Line
            data={{
              labels: startingDates,
              datasets: [
                {
                  label: 'Fatty Foods',
                  data:
                    sortedWeeks &&
                    sortedWeeks
                      .slice(0, 8)
                      .map((week: any) => week.fattyFoods.length),
                  backgroundColor: 'black',
                  borderWidth: 1,
                  borderColor: 'black',
                },
                {
                  label: 'Sports',
                  data:
                    sortedWeeks &&
                    sortedWeeks.slice(0, 8).map((week: any) => week.sports.length),
                  backgroundColor: 'blue',
                  borderWidth: 1,
                  borderColor: 'blue',
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
            }}
          />
        ) : (
          <div className='py-3'>
            <p>Please, add your weights on the week page</p>
          </div>
        )}
      </div>
    </>
  )
}

export default LineChart
