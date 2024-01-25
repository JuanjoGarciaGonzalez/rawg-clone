import React from 'react'
import { useFetch } from '../../useFetch'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GamePageGallery } from '../games/GamePageGallery'
import { BreadcrumbsGames } from '../layout/BreadcrumbsGames'

export const GamePage = () => {
    const { term } = useParams()
    const {data, loading, error} = useFetch(`https://rawg.io/api/games/${term}?key=${import.meta.env.VITE_API_KEY}`)

    useEffect(() => {
        const main = document.querySelector('main')

        if(main != null && data != null) {
            main.style.backgroundImage = 'linear-gradient(180deg, rgba(21, 21, 21, 1) 0%, rgba(21,21,21,0.8541911764705882) 0%, rgba(21,21,28,1) 100%),url('+data.background_image+')' 
            main.style.backgroundSize = 'cover'
            main.style.backgroundPosition = 'center'
            main.style.backgroundRepeat = 'no-repeat'
            main.classList.add('game-page-bg')
        }

        
        
      })
     

    return (
        
        <section className='w-100'>
           
            {error && <p>Error: {error}</p>}
            {loading == true ? <div className='lds-dual-ring'></div> :
            <div className='content flex padding'>
                <div className='game-page-content'>
                    <BreadcrumbsGames game={data?.name}/>
                    <div className='game-header'>
                        <span className='game-page-date'>{data?.released}</span>
                        <div className='game-page-platforms'>
                            {data?.platforms != null ? data?.platforms.map((platform) => (
                            <span className={`game-card-platform ${platform.platform.slug == 'pc' ? 'pc' : ''} ${platform.platform.name.includes('Play') ? 'play' : ''} ${platform.platform.name.includes('Xbox') ? 'xbox' : ''} ${platform.platform.slug == 'mac' ? 'mac' : ''} ${platform.platform.name.includes('Nintendo') ? 'nintendo' : ''} ${platform.platform.slug == 'android' ? 'android' : ''} ${platform.platform.slug == 'ios' ? 'ios' : ''} ${platform.platform.slug == 'linux' ? 'linux' : ''}`} key={platform.platform.id} title={platform.platform.name}></span>
                            )) : ''}
                        </div>
                    </div>
                    <h2 className='page-title'>{data?.name}</h2>
                    <a href="#" className='add-game'>Add to<br/><span>My games</span> {data?.added}</a>

                    <div className='game-ratings'>
                        {data?.ratings.map((rating) => (
                            <span key={rating.id} className={`ratings ${rating.title}`}><span className='point'></span>{rating.title} <span>{rating.count} </span></span>  
                        ))}
                    </div>

                    <p className='game-page-about'>About</p>
                    <p className='game-page-desc'>{data?.description_raw}</p>

                    <table className='game-page-table'>
                        <tbody>
                            <tr>
                                <th>Platforms</th>
                                <th>Genres</th>
                            </tr>
                            <tr>
                                <td>{data?.platforms.map((platform) => (
                                    <p key={platform.platform.id}>{platform.platform.name}</p>
                                ))}</td>
                                <td>{data?.genres.map((genre) => (
                                    <p key={genre.id}>{genre.name}</p>
                                ))}</td>
                            </tr>
                            <tr className='empty-row'></tr>
                            <tr>
                                <th>Release date</th>
                                <th>Developers</th>
                            </tr>
                            <tr>
                                <td>
                                    <p>{data?.released}</p>
                                </td>
                                <td>{data?.developers.map((developer) => (
                                    <p key={developer.id}>{developer.name}</p>
                                ))}</td>
                            </tr>
                            <tr className='empty-row'></tr>
                            <tr>
                                <th>Publisher</th>
                                <th>Age rating</th>
                            </tr>
                            <tr>
                                <td>{data?.publishers.map((publisher) => (
                                    <p key={publisher.id}>{publisher.name}</p>
                                ))}</td>
                                <td>
                                    <p>{ data?.esrb_rating != null ? data?.esrb_rating.name : '' }</p>
                                </td>
                            </tr>
                            <tr className='empty-row'></tr>
                            <tr>
                                <th>Website</th>
                                <th>Metacritic</th>
                            </tr>
                            <tr>
                                <td>
                                    <a href={data?.website} target='_blank' >{data?.website}</a>
                                </td>

                                <td>
                                    {data?.metacritic != null ? <div className='metacritic-wrapper'><span className={`metacritic single-page ${data?.metacritic >= 50 ? 'green' : 'red'}`}>{data?.metacritic}</span></div> : ''}
                                </td>
                            </tr>
                            <tr className='empty-row'></tr>
                            <tr>
                                <th>Tags</th>
                            </tr>
                            <tr>
                                <td className='tags'>
                                    {data?.tags.map((tag, index) => (
                                        <span key={tag.id}>
                                            {tag.name}
                                            {index < data.tags.length - 1 && <span className='tags-separator'>, </span>}
                                        </span> 
                                    ))}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className='game-page-media'>
                    <div className='game-page-media-gallery'>
                        <GamePageGallery game={data?.id}/>
                    </div>
                    
                    {data?.stores.length > 0 ?
                    <div className='game-page-stores'>
                        <h4>Where to buy?</h4>
                        <div className='game-page-stores-wrapper'>
                            {data?.stores != null ? data?.stores.map((store) => (
                                <a key={store.store.id} target='_blank' href={`https://${store.store.domain}`} className='game-page-store'>{store.store.name}</a>
                            )) : ''} 
                        </div>                    
                    </div>
                    : ''}
                </div>
            </div>
            }
            
        </section> 
    )
}