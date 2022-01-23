import React, { useState } from 'react'

import DayHeader from './DayHeader'
import AddWeights from './AddWeights'
import AddFattyFoods from './AddFattyFoods'
import AddSports from './AddSports'

const Day = () => {
  const [startingWeight, setStartingWeight] = useState(0)
  const [goalWeight, setGoalWeight] = useState(0)
  const [addWeights, setAddWeights] = useState(false)
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)

  // TODO:
  const getWeights = () => {}

  const handleShowAddWeights = () => {
    setAddWeights(!addWeights)
  }

  const handleShowAddFattyFoods = () => {
    setAddFattyFoods(!addFattyFoods)
  }

  const handleShowAddSports = () => {
    setAddSports(!addSports)
  }

  return (
    <div>
      <DayHeader
        handleShowAddWeights={handleShowAddWeights}
        handleShowAddFattyFoods={handleShowAddFattyFoods}
        handleShowAddSports={handleShowAddSports}
      />
      {addWeights && (
        <AddWeights
          startingWeight={startingWeight}
          setStartingWeight={setStartingWeight}
          goalWeight={goalWeight}
          setGoalWeight={setGoalWeight}
        />
      )}
      {/* TODO: */}
      {addFattyFoods && <AddFattyFoods />}
      {addSports && <AddSports />}
    </div>
  )
}

export default Day
