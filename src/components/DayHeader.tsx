import React from 'react'
import { Button } from 'react-bootstrap'

// TODO: props types

const DayHeader = ({ handleShowAddFattyFoods, handleShowAddSports }: any) => {
  return (
    <header>
      <Button onClick={handleShowAddFattyFoods} variant='light'><i className="fas fa-pizza-slice"></i></Button>
      <Button onClick={handleShowAddSports} variant='light'><i className="fas fa-running"></i></Button>
    </header>
  )
}

export default DayHeader
