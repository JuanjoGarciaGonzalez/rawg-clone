import React from 'react'
import { useFetch } from '../../useFetch'
import { Filters } from '../layout/Filters'

export const Home = () => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/games?token&key=${apiKey}&metacritic=85,100&ordering=-released&page_size=40`)

    console.log(data)

  return (
    <section className='content'>
        <h2 className='page-title'>New and Trending</h2>
        <p>Based on player counts and release date</p>

        <Filters />

        <article className='game-list'>
        {error && <p>Error: {error}</p>}
        {loading && <div className='lds-dual-ring'></div>}
        {data?.results.map((game) => (
            <div className='game-card' key={game.id}>
                <a href={game.slug}>
                    <div className='game-card-image'>
                        {game.background_image != null ? <img src={game.background_image} alt={game.name}/> : ''}
                    </div>
                    <div className='game-card-content'>
                        {game.parent_platforms != null ? game.parent_platforms.map((platform) => (
                            <span className={`game-card-platform ${platform.platform.slug == 'pc' ? 'pc' : ''} ${platform.platform.slug == 'playstation' ? 'play' : ''} ${platform.platform.slug == 'xbox' ? 'xbox' : ''} ${platform.platform.slug == 'mac' ? 'mac' : ''} ${platform.platform.slug == 'nintendo' ? 'nintendo' : ''} ${platform.platform.slug == 'android' ? 'android' : ''} ${platform.platform.slug == 'ios' ? 'ios' : ''} ${platform.platform.slug == 'linux' ? 'linux' : ''}`} key={platform.platform.id}></span>
                        )) : ''}
                        <h3>{game.name}</h3>
                        <span className='rating'><img src='./../../../public/star.svg' alt='star'/> {game.rating}</span>
                    </div>
                    
                </a>
            </div>
        ))}
            
        </article>
    </section>
  )
}
