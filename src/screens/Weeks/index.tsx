import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import WeekHeader from '../../components/WeekHeader'
import Week from '../../components/Week'
import Message from '../../components/Message'
import Info from '../../components/Info'
import { AppState } from '../../redux/types'
import { getUserWeeksRequest } from '../../redux/actions/weeks'
import { getUserFattyFoodsRequest } from '../../redux/actions/fattyFoods'

const Weeks = () => {
  const [addWeek, setAddWeek] = useState(false)
  const { error, loading, userInfo } = useSelector(
    (state: AppState) => state.auth
  )
  const weeks = useSelector((state: AppState) => state.weeks.list)
  const fattyFoods = useSelector((state: AppState) => state.fattyFoods.list)
  const sports = useSelector((state: AppState) => state.sports.list)

  const dispatch = useDispatch()

  const handleShowAddWeek = () => {
    setAddWeek(!addWeek)
  }

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserWeeksRequest())
    }
  }, [userInfo, dispatch])

  return (
    <div className={styles.container}>
      <WeekHeader handleShowAddWeek={handleShowAddWeek} />
      {addWeek && <AddWeek addWeek={addWeek} setAddWeek={setAddWeek} />}
      {weeks.length === 0 ? (
        <Info />
      ) : (
        weeks.map((week: any) => (
          <div key={week._id}>
            <Week
              startDate={week.date}
              weekId={week._id}
              fattyFoods={fattyFoods}
              sports={sports}
            />
          </div>
        ))
      )}
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Weeks
