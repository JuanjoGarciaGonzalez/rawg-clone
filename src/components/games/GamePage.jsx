import React from 'react'
import { useFetch } from '../../useFetch'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GamePageGallery } from '../games/GamePageGallery'
import { GamePageTrailer } from '../games/GamePageTrailer'

export const GamePage = () => {
    const { term } = useParams();
    const {data, loading, error} = useFetch(`https://rawg.io/api/games/${term}?key=${import.meta.env.VITE_API_KEY}`)

    useEffect(() => {
        const main = document.querySelector('main')

        if(main != null && data != null) {
            main.style.backgroundImage = 'linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(14,27,37,0.8841911764705882) 0%, rgba(12,13,28,1) 100%),url('+data.background_image+')' 
            main.style.backgroundSize = 'cover'
            main.style.backgroundPosition = 'center'
            main.style.backgroundRepeat = 'no-repeat'
            main.classList.add('game-page-bg')
        }

        
        
      })
     

    return (
        <section className='content flex padding'>
            {error && <p>Error: {error}</p>}
            <div className='game-page-content'>
                <div className='game-header'>
                    {data?.released}
                    <div>
                        {data?.parent_platforms != null ? data?.parent_platforms.map((platform) => (
                        <span className={`game-card-platform ${platform.platform.slug == 'pc' ? 'pc' : ''} ${platform.platform.slug == 'playstation' ? 'play' : ''} ${platform.platform.slug == 'xbox' ? 'xbox' : ''} ${platform.platform.slug == 'mac' ? 'mac' : ''} ${platform.platform.slug == 'nintendo' ? 'nintendo' : ''} ${platform.platform.slug == 'android' ? 'android' : ''} ${platform.platform.slug == 'ios' ? 'ios' : ''} ${platform.platform.slug == 'linux' ? 'linux' : ''}`} key={platform.platform.id}></span>
                        )) : ''}
                    </div>
                </div>
                <h2 className='page-title'>{data?.name}</h2>
                <a href="#">Add to<br/><span>My games</span> {data?.added}</a>

                <div className='game-ratings'>
                    {data?.ratings.map((rating) => {
                        <span className={`ratings ${rating.title}`}>{rating.count} {rating.title}</span>  
                    })}
                </div>

                <p>About</p>
                <p>{data?.description_raw}</p>
            </div>

            <div className='game-page-media'>
                <GamePageTrailer game={data?.id}/>
                <GamePageGallery game={data?.id}/>
            </div>
            
        </section> 
    )
}