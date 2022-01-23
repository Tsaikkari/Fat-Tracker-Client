import React from 'react'
import { Button } from 'react-bootstrap'

// TODO: props types

const DayHeader = ({ handleShowAddWeights, handleShowAddFattyFoods, handleShowAddSports }: any) => {
  return (
    <header>
      {/* TODO: date */}
      <Button onClick={handleShowAddWeights}>Weights</Button>
      <Button onClick={handleShowAddFattyFoods}>FattyFoods</Button>
      <Button onClick={handleShowAddSports}>Sports</Button>
    </header>
  )
}

export default DayHeader
