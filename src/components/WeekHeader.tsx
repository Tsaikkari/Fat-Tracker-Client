import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

import { AppState } from '../redux/types'

type WeekHeaderProps = {
  handleShowAddWeek: () => void
}

const WeekHeader = ({ handleShowAddWeek }: WeekHeaderProps) => {
  const { isLoggedIn } = useSelector((state: AppState) => state.auth)
  return (
    <header>
      {isLoggedIn && (
        <Button
          onClick={handleShowAddWeek}
          variant='light'
          className='my-2 week-btn'
        >
          New Week
        </Button>
      )}
    </header>
  )
}

export default WeekHeader
