import React from 'react'
import { useFetch } from '../../useFetch'

export const FilterGenre = ({ onFilterChange }) => {
    const {data} = useFetch(`https://rawg.io/api/genres?token&key=${import.meta.env.VITE_API_KEY}&ordering=name`)

    async function filterPerGenre(event) {
      const genre = event.target.value;
      const platformValue = document.querySelector('.order-platform').value;
      const orderValue = document.querySelector('.order').value;
      onFilterChange(genre, platformValue, orderValue, true);
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
