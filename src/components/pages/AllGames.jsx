import React from 'react'
import { useFetch } from './../../useFetch'
import { Filters } from './../layout/Filters'
import { GameCard } from '../games/GameCard'
import { useState, useEffect } from 'react'

export const AllGames = () => {
    const {data, loading, error} = useFetch(`${import.meta.env.VITE_API_BASE_URL}&page_size=40`)

    const [filteredGames, setFilteredGames] = useState(data);
    const [isFiltering, setIsFiltering] = useState(false);
    
    
    useEffect(() => {
        if (data && data.results) {
            setFilteredGames(data);
        }
    }, [data]);
    


    const handleFilter = async (genre, platform, order) => {
        console.log(genre, platform)
        document.querySelector('.game-list').style.display = 'none'
        setIsFiltering(true)
        let urlFiltered = `${import.meta.env.VITE_API_BASE_URL}&page_size=40`
        if (genre != 'all') {
            urlFiltered += `&genres=${genre}`
        }

        if (platform != 'all') {
            urlFiltered += `&platforms=${platform}`
        }

        if (order != 'all') {
            urlFiltered += `&ordering=${order}`
        }

        const response = await fetch(urlFiltered);
        const filteredData = await response.json();
        document.querySelector('.game-list').style.display = 'grid'
        setFilteredGames(filteredData);
        setIsFiltering(false);
    };


  return (
    <section className='content'>
        <h2 className='page-title'>All Games</h2>
        <p>Explore all available games</p>

        <Filters onFilterChange={handleFilter}/>

        {error && <p>Error: {error}</p>}
        {loading || isFiltering ? <div className='lds-dual-ring'></div> : ''}
        <article className='game-list'>
        {filteredGames?.results.map((game) => (
            <GameCard data={game} key={game.id}/>
        ))}
            
        </article>
    </section>
  )
}
