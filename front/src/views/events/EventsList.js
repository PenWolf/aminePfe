import CardTable from 'components/Cards/CardTable'
import React from 'react'
import EventsTable from './EventsTable'

export default function EventsList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <EventsTable/>
      </div>
    </div>
  </>
  )
}
