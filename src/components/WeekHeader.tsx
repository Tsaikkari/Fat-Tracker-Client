import React from 'react'
import { Button } from 'react-bootstrap'

type WeekHeaderProps = {
  handleShowAddWeek: () => void
}

const WeekHeader = ({ handleShowAddWeek }: WeekHeaderProps) => {
  return (
    <header>
      <Button onClick={handleShowAddWeek} variant='light' className='my-2 week-btn'>
        New Week
      </Button>
    </header>
  )
}

export default WeekHeader
