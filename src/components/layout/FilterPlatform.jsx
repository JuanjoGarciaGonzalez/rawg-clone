import React from 'react'
import { useFetch } from '../../useFetch'

export const FilterPlatform = ({ onFilterChange }) => {
    const {data} = useFetch(`https://rawg.io/api/platforms?token&key=${import.meta.env.VITE_API_KEY}&ordering=name`)

    async function filterPerPlatform(event) {
      const platform = event.target.value;
      const genreValue = document.querySelector('.order-genre').value;
      const orderValue = document.querySelector('.order').value;
      onFilterChange(genreValue, platform, orderValue, true);
    }

  return (
    <select name="order-platform" id="order-platform" className='order-platform' onChange={filterPerPlatform}>
        <option value="all">All platforms</option>
        {data?.results.map((platform) => (
            <option value={platform.id} key={platform.id}>{platform.name}</option>
        ))}
    </select>
  )
}
