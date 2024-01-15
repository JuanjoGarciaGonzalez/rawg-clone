import React from 'react'
import { useFetch } from '../../useFetch'

export const FilterPlatform = ({ onFilterChange }) => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data} = useFetch(`https://rawg.io/api/platforms/lists/parents?token&key=${import.meta.env.VITE_API_KEY}&ordering=name`)

    async function filterPerPlatform(event) {
      const platform = event.target.value;
      const genreValue = document.querySelector('.order-genre').value;
      const orderValue = document.querySelector('.order').value;
      onFilterChange(genreValue, platform, orderValue);
    }

  return (
    <select name="order-platform" id="order-platform" className='order-platform' onChange={filterPerPlatform}>
        <option value="all">All platforms</option>
        {data?.results.map((platform) => (
            <option value={platform.slug} key={platform.id}>{platform.name}</option>
        ))}
    </select>
  )
}
