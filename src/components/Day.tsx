import React, { useState } from 'react'
import axios from 'axios'

import DayHeader from './DayHeader'
import AddWeights from './AddWeights'
import AddFattyFoods from './AddFattyFoods'
import AddSports from './AddSports'

type DayProps = {
  day: string
}

const Day = ({ day }: DayProps) => {
  const [startingWeight, setStartingWeight] = useState(0)
  const [goalWeight, setGoalWeight] = useState(0)
  const [addWeights, setAddWeights] = useState(false)
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)

  // TODO:
  const getWeights = () => {}

  const getFattyFoods = () => {}

  const getSports = () => {}

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
    <main>
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
          refreshWeights={getWeights}
        />
      )}
      {/* TODO: */}
      {addFattyFoods && <AddFattyFoods refreshFattyFoods={getFattyFoods}/>}
      {addSports && <AddSports refreshSports={getSports} />}
      <div>
        <p>{day}</p>
        blaa blaa blaa
      </div>
    </main>
  )
}

export default Day
