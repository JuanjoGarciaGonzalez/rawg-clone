import React from 'react'

export const FilterOrder = ({ onFilterChange }) => {
    

    async function filterPerGenre(event) {
      const order = event.target.value;
      const platformValue = document.querySelector('.order-platform').value;
      const genreValue = document.querySelector('.order-genre').value;
      onFilterChange(genreValue, platformValue, order);
    }

  return (
    <select name="order" id="order" className='order' onChange={filterPerGenre}>
        <option value="all">Order by:</option>
        <option value="-relevance">Relevance</option>
        <option value="-added">Date added</option>
        <option value="-name">Name</option>
        <option value="-released">Realease date</option>
        <option value="-popularity">Popularity</option>
        <option value="-rating">Average rating</option>
    </select>
  )
}
