import CardTable from 'components/Cards/CardTable'
import React from 'react'
import SpecialitiesTable from './SpecialitiesTable'

export default function SpecialitiesList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <SpecialitiesTable/>
      </div>
    </div>
  </>
  )
}
