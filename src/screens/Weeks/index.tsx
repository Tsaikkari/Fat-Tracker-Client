import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import WeekHeader from '../../components/WeekHeader'
import Week from '../../components/Week'
import Message from '../../components/Message'
import { AuthContext } from '../../context/auth'
import { WeekContext } from '../../context/week'

const Weeks = () => {
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [sports, setSports] = useState<[]>([])
  const [addWeek, setAddWeek] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const handleShowAddWeek = () => {
    setAddWeek(!addWeek)
  }

  const { isLoading } = useContext(AuthContext)
  const { weeks, getWeeks } = useContext(WeekContext)

  const storedToken = localStorage.getItem('authToken')

  const getFattyFoods = () => {
    axios
      .get('/api/fattyFoods/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setFattyFoods(response.data.payload)
      })
      .catch((err: any) => {
        const errorMsg = err.message
        setErrorMessage(errorMsg)
      })
  }

  useEffect(() => {
    getFattyFoods()
    //eslint-disable-next-line
  }, [])

  const getSports = () => {
    axios
      .get('/api/sports/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setSports(response.data.payload)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getSports()
    //eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      <WeekHeader handleShowAddWeek={handleShowAddWeek} />
      {addWeek && (
        <AddWeek
          refreshWeeks={getWeeks}
          addWeek={addWeek}
          setAddWeek={setAddWeek}
        />
      )}
      {weeks.length === 0 && (
        <div>
          <h4 className='my-3'>Creating Your Weekly Plans</h4>
          <p>The best way to loose weight is to eat less fatty foods and 
            exercise more. Adding the day(s) into your plan when you are going to / when you have eaten
            fatty foods will help you reduce the habit. Adding the day(s) you are going to exercise 
            during the week will help you to increase that habit and fasten the weight loss as well as 
            make your body fit.
          </p>
          <p>Start by clicking on the <span>New Week</span> button to add your week plan. Add your current
            and goal weight for the week by clicking the <span>Weight</span> button. It's wise to set a moderate goal; 
            normally, people can loose around <span>0.5 - 1 kg in a week</span>.
          </p>
          <p>Add your fatty foods and exercise days into the plan. At the end of the week, add your new 
            weight by clicking the yellow button. 
          </p>
          <p>You can monitor your progress at the <b>Chart</b> page.</p>
        </div>
      )}
      {weeks &&
        weeks.map((week: any) => (
          <div key={week._id}>
            <Week
              refreshFattyFoods={getFattyFoods}
              refreshSports={getSports}
              refreshWeeks={getWeeks}
              startDate={week.date}
              weekId={week._id}
              fattyFoods={fattyFoods}
              sports={sports}
            />
          </div>
        ))}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {isLoading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Weeks
