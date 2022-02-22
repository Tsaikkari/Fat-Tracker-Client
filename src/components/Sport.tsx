import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'

import { deleteSportRequest } from '../redux/actions/sport'
import { getUserWeeksRequest } from '../redux/actions/weeks'

type SportProps = {
  weekId: string
  sportId: string
  sportWeekId: string
  sport: string
  duration: number
  date: string
  dayIndex: number
  days: string[]
}
const Sport = ({
  weekId,
  sportId,
  sportWeekId,
  sport,
  duration,
  date,
  dayIndex,
  days,
}: SportProps) => {
  const error = useSelector((state: AppState) => state.week.error)
  const dispatch = useDispatch()

  const deleteSports = async () => {
    if (window.confirm('Delete sports?')) {
      dispatch(deleteSportRequest(sportId))
      dispatch(getUserWeeksRequest())
    }
  }

  return (
    <>
      {sportWeekId === weekId && date === days[dayIndex] && (
        <div className='sport-container'>
          <p>{sport}</p>
          <p>{duration} min</p>
          <Button variant='danger' className='btn-sm' onClick={deleteSports}>
            <i className='fas fa-trash'></i>
          </Button>
        </div>
      )}
      {error && <Message variant='danger'>{error.message}</Message>}
    </>
  )
}

export default Sport
