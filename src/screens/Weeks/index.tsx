import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import WeekHeader from '../../components/WeekHeader'
import Week from '../../components/Week'
import Message from '../../components/Message'
import Info from '../../components/Info'
import { AppState } from '../../redux/types'
import { getUserWeeksRequest } from '../../redux/actions'

const Weeks = () => {
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [sports, setSports] = useState<[]>([])
  const [addWeek, setAddWeek] = useState(false)

  const { error, loading } = useSelector((state: AppState) => state.auth)
  const weeks = useSelector((state: AppState) => state.weeks.list)

  const dispatch = useDispatch()
  
  const handleShowAddWeek = () => {
    setAddWeek(!addWeek)
  }

  useEffect(() => {
    dispatch(getUserWeeksRequest())
  }, [dispatch])

  console.log(weeks, 'weeks')

  // const getFattyFoods = () => {
  //   axios
  //     .get('/api/fattyFoods/user', {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((response) => {
  //       setFattyFoods(response.data.payload)
  //     })
  //     .catch((err: any) => {
  //       const errorMsg = err.message
  //       setErrorMessage(errorMsg)
  //     })
  // }

  // useEffect(() => {
  //   getFattyFoods()
  //   //eslint-disable-next-line
  // }, [])

  // const getSports = () => {
  //   axios
  //     .get('/api/sports/user', {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((response) => {
  //       setSports(response.data.payload)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   getSports()
  //   //eslint-disable-next-line
  // }, [])

  return (
    <div className={styles.container}>
      <WeekHeader handleShowAddWeek={handleShowAddWeek} />
      {addWeek && (
        <AddWeek
          addWeek={addWeek}
          setAddWeek={setAddWeek}
        />
      )}
      {weeks.length === 0 && (
        <Info />
      )}
      {weeks &&
        weeks.map((week: any) => (
          <div key={week._id}>
            <Week
              startDate={week.date}
              weekId={week._id}
              fattyFoods={fattyFoods}
              sports={sports}
            />
          </div>
        ))}
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Weeks
