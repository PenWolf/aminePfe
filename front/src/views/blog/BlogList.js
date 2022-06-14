import CardTable from 'components/Cards/CardTable'
import React from 'react'
import BlogTable from './BlogTable'

export default function BlogList() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <BlogTable/>
      </div>
    </div>
  </>
  )
}
