import CardTable from 'components/Cards/CardTable'
import React from 'react'
import ClassesTable from './ClassesTable'

export default function CLassesList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <ClassesTable/>
      </div>
    </div>
  </>
  )
}
