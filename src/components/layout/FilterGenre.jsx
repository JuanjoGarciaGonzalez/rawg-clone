import React from 'react'
import { useFetch } from '../../useFetch'

export const FilterGenre = ({ onFilterChange }) => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/genres?token&key=${apiKey}&ordering=name`)

    async function filterPerGenre(event) {
      const genre = event.target.value;
      onFilterChange(genre);
  }

  return (
    <select name="order-genre" id="order-genre" className='order-genre' onChange={filterPerGenre}>
        <option value="all">All genres</option>
        {data?.results.map((genre) => (
            <option value={genre.slug} key={genre.id}>{genre.name}</option>
        ))}
    </select>
  )
}
