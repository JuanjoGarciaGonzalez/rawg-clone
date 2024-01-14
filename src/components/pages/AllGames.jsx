import React from 'react'
import { useFetch } from './../../useFetch'
import { Filters } from './../layout/Filters'
import { GameCard } from '../games/GameCard'
import { useState, useEffect } from 'react'

export const AllGames = () => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/games?token&key=${apiKey}&page_size=40`)

    const [filteredGames, setFilteredGames] = useState(data);
    const [isFiltering, setIsFiltering] = useState(false);
    
    
    useEffect(() => {
        if (data && data.results) {
            setFilteredGames(data);
        }
    }, [data]);
    


    const handleFilter = async (genre) => {
        document.querySelector('.game-list').style.display = 'none'
        setIsFiltering(true)
        let urlFiltered = ''
        if (genre == 'all') {
            urlFiltered = `https://rawg.io/api/games?token&key=${apiKey}&page_size=40`
        }else {
            urlFiltered = `https://rawg.io/api/games?token&key=${apiKey}&page_size=40&genres=${genre}`
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
