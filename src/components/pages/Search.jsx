import React from 'react'
import {
    BrowserRouter as Router,
    useParams,
  } from "react-router-dom";
  import { useFetch } from '../../useFetch';
  import { GameCard } from '../games/GameCard';
  import { useEffect } from 'react';


export const Search = () => {

    const { term } = useParams();
    const {data, loading, error} = useFetch(`${import.meta.env.VITE_API_BASE_URL}&search=${term}&search_precise=true&page_size=40`)

    useEffect(() => {
        const input = document.querySelector('input')
        input.value = term
      })

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
