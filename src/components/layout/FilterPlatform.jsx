import React from 'react'
import { useFetch } from '../../useFetch'

export const FilterPlatform = () => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/platforms/lists/parents?token&key=${apiKey}&ordering=name`)

  return (
    <select name="order-platform" id="order-platform" className='order-platform'>
        <option value="all">All platforms</option>
        {data?.results.map((platform) => (
            <option value={platform.slug} key={platform.id}>{platform.name}</option>
        ))}
    </select>
  )
}
