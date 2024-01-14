import React from 'react'
import {
    BrowserRouter as Router,
    useParams,
  } from "react-router-dom";
  import { useFetch } from '../../useFetch';
  import { Filters } from '../layout/Filters';
  import { GameCard } from '../games/GameCard';


export const Search = () => {

    const { term } = useParams();
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/games?token&key=${apiKey}&search=${term}&search_precise=boolean&page_size=40`)

    const redirectHome = () => {
        window.location.href = '/';
    }

    return (
        <section className='content'>

            <div className='search-results'>
                <span className='search-result-term'>            
                    <svg className='search-bar-lens' alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                    {term}
                </span>
                <div className='search-result-count'><button className='skip-search' onClick={redirectHome}></button> <span>Found {data?.count} items</span></div>
            </div>

            <article className='game-list'>
            {error && <p>Error: {error}</p>}
            {loading && <div className='lds-dual-ring'></div>}
            {data?.results.map((game) => (
                <GameCard data={game} key={game.id} />
            ))}
                
            </article>
        </section>
    )
}
