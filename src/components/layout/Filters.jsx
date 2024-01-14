import React from 'react'
import { FilterGenre } from './FilterGenre'
import { FilterPlatform } from './FilterPlatform'

export const Filters = ({ onFilterChange }) => {

  const handleGenreChange = (genre) => {
    onFilterChange(genre);
};

  return (
    <section className='filters'>
        <select name="order" id="order" className='order'>
            <option value="select">Select option</option>
            <option value="relevance">Relevance</option>
            <option value="added">Date added</option>
            <option value="name">Name</option>
            <option value="released">Realease date</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Average rating</option>
        </select>

        <FilterGenre onFilterChange={onFilterChange} />
        <FilterPlatform />


    </section>
  )
}
