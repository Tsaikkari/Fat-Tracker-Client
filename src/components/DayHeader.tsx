import React from 'react'
import { Button } from 'react-bootstrap'

type DayHeaderProps = {
  handleShowAddFattyFoods: () => void
  handleShowAddSports: () => void
}

const DayHeader = ({
  handleShowAddFattyFoods,
  handleShowAddSports,
}: DayHeaderProps) => {
  return (
    <header>
      <Button onClick={handleShowAddFattyFoods} variant='light'>
        <i className='fas fa-pizza-slice'></i>
      </Button>
      <Button onClick={handleShowAddSports} variant='light'>
        <i className='fas fa-running'></i>
      </Button>
    </header>
  )
}

export default DayHeader
