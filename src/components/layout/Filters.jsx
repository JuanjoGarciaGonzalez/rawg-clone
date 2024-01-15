import React from 'react'
import { FilterGenre } from './FilterGenre'
import { FilterPlatform } from './FilterPlatform'
import { FilterOrder } from './FilterOrder'

export const Filters = ({ onFilterChange }) => {



  return (
    <section className='filters'>
        <FilterOrder onFilterChange={onFilterChange} />
        <FilterGenre onFilterChange={onFilterChange} />
        <FilterPlatform onFilterChange={onFilterChange} />
    </section>
  )
}
