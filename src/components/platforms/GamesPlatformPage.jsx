import React, { useEffect } from 'react'
import { useFetch } from '../../useFetch'
import { Filters } from '../layout/Filters'
import { GameCard } from '../games/GameCard'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const GamesPlatformPage = () => {
    const { term } = useParams();
    let { data, loading, error} = useFetch(`${import.meta.env.VITE_API_BASE_URL}&platforms=${term}&ordering=releveance&page_size=40`)
    const [filteredGames, setFilteredGames] = useState(data);
    const [isFiltering, setIsFiltering] = useState(false);

    const [platformData, setPlatformData] = useState([]);
    
    useEffect(() => {
        if (data && data.results) {
            setFilteredGames(data);
        }

        fetch(`https://rawg.io/api/platforms/${term}?key=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlatformData(data);
            console.log(platformData)
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

        const selectPlatform = document.querySelector('#order-platform')
        selectPlatform.style.display = 'none'
    }, [data]);

    
    


    const handleFilter = async (genre, platform, order) => {

        document.querySelector('.game-list').style.display = 'none'
        setIsFiltering(true)
        let urlFiltered = `${import.meta.env.VITE_API_BASE_URL}&page_size=40&platforms=${term}`
        if (genre != 'all') {
            urlFiltered += `&genres=${genre}`
        }

        if (order != 'all') {
            urlFiltered += `&ordering=${order}`
        }else {
            urlFiltered += `&ordering=releveance`
        }

        const response = await fetch(urlFiltered);
        const filteredData = await response.json();
        document.querySelector('.game-list').style.display = 'grid'
        setFilteredGames(filteredData);
        setIsFiltering(false);
    };

  return (
    <section className='content'>
        <h2 className='page-title'>{platformData?.name}</h2>

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
