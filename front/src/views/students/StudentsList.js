import CardTable from 'components/Cards/CardTable'
import React from 'react'
import StudentsTable from './StudentsTable'

export default function StudentsList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <StudentsTable/>
      </div>
    </div>
  </>
  )
}
