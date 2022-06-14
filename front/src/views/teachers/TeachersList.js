import React from 'react'
import TeachersTable from './TeachersTable'

export default function TeachersList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <TeachersTable/>
      </div>
    </div>
  </>
  )
}
