import React, { useEffect } from 'react'
import { useFetch } from '../../useFetch'
import { Filters } from '../layout/Filters'
import { GameCard } from '../games/GameCard'
import { useState, useCallback } from 'react'

export const Home = () => {
   
    const [filteredGames, setFilteredGames] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [error, setError] = useState(null)
    const [nextPage, setNextPage] = useState(false)


    const handleFilter = useCallback(async (genre, platform, order, firstPage) => {
        setIsLoading(true)
        if(firstPage) {
            setCurrentPage(1)
        }
        if(genre === undefined) {
            genre = document.querySelector('#order-genre').value
        }
        if(platform === undefined) {
            platform = document.querySelector('#order-platform').value
        }
        if(order === undefined) {
            order = document.querySelector('#order').value
        }
        let urlFiltered = `${import.meta.env.VITE_API_BASE_URL}&page_size=20&metacritic=85,100&page=${firstPage ? '1' : currentPage}`
        if (genre !== 'all' && genre != undefined) {
            document.querySelector('.game-list').style.display = 'none'
            urlFiltered += `&genres=${genre}&page=1`
        }

        if (platform !== 'all' && platform != undefined) {
            document.querySelector('.game-list').style.display = 'none'
            urlFiltered += `&platforms=${platform}`
        }

        if (order !== 'all' && platform != undefined) {
            document.querySelector('.game-list').style.display = 'none'
            urlFiltered +=  `&ordering=${order}`
        }else {
            urlFiltered += `&ordering=-released`
        }

        try {
            const response = await fetch(urlFiltered)
            const data = await response.json()
            let allGames = []
            if(firstPage) {
                allGames = data.results
            }else {
                allGames = filteredGames.concat(data.results)
            }

            setFilteredGames(allGames)

            if(data.next != null) {
                setNextPage(true)
            }else {
                setNextPage(false)
            }
            
        } catch (error) {
            setError(error.message)
        } finally {
            document.querySelector('.game-list').style.display = 'grid'
            setIsLoading(false)
        }
    }, [currentPage])

    useEffect(() => {
        handleFilter()
    }, [currentPage])

    const handleLoadMore = () => {
        if(nextPage === true) {
            setCurrentPage(currentPage + 1)
        }
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            handleLoadMore()
        }
    }


    return (
        <section className='content'>
            <h2 className='page-title'>New and Trending</h2>
            <p>Based on player counts and release date</p>

            <Filters onFilterChange={handleFilter} />

            
            <article className='game-list'>
                {filteredGames.length > 0 && filteredGames.map(game => (
                    <GameCard key={game.id} data={game} />
                ))}
            </article>
            {error && <p>Error: {error}</p>}
            {(isLoading) && <div className='lds-dual-ring'></div>}
        </section>
    )
}