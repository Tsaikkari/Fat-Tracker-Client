import React from 'react'
import { Button } from 'react-bootstrap'

// TODO: props types

const DayHeader = ({ handleShowAddFattyFoods, handleShowAddSports }: any) => {
  return (
    <header>
      <Button onClick={handleShowAddFattyFoods}>FattyFoods</Button>
      <Button onClick={handleShowAddSports}>Sports</Button>
    </header>
  )
}

export default DayHeader
