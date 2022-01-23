import React, { useState } from 'react'
import axios from 'axios'

import DayHeader from './DayHeader'
import AddWeights from './AddWeights'
import AddFattyFoods from './AddFattyFoods'
import AddSports from './AddSports'

type DayProps = {
  day: string
  weekId: string
}

const Day = ({ day, weekId }: DayProps) => {
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
    <>
      <DayHeader
        handleShowAddWeights={handleShowAddWeights}
        handleShowAddFattyFoods={handleShowAddFattyFoods}
        handleShowAddSports={handleShowAddSports}
      />
      {addWeights && (
        <AddWeights
          refreshWeights={getWeights}
          addWeights={addWeights}
          setAddWeights={setAddWeights}
          weekId={weekId}
        />
      )}
      {/* TODO: */}
      {addFattyFoods && <AddFattyFoods refreshFattyFoods={getFattyFoods}/>}
      {addSports && <AddSports refreshSports={getSports} />}
      <div className='day-container'>
        <p>{day}</p>
        blaa blaa blaa
      </div>
    </>
  )
}

export default Day
