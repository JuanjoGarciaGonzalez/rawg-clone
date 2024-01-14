import React from 'react'
import { useFetch } from '../../useFetch'

export const MenuPlatforms = () => {
    const apiKey = 'de35ab7d39f2441aad3a92606e464186'
    const {data, loading, error} = useFetch(`https://rawg.io/api/platforms/lists/parents?token&key=${apiKey}&ordering=releveance&page_size=7`)
    
  return (
    <ul className='sidebar-menu'>
        <li><a href='/platforms'>Platforms</a></li>
        {data?.results.map((platform) => (
            <li className='platform-menu-item' key={platform.id}>
                <a href={`/games/${platform.slug}`} className='platform-menu__link'><span className={`game-card-platform ${platform.slug == 'pc' ? 'pc' : ''} ${platform.slug == 'playstation' ? 'play' : ''} ${platform.slug == 'xbox' ? 'xbox' : ''} ${platform.slug == 'mac' ? 'mac' : ''} ${platform.slug == 'nintendo' ? 'nintendo' : ''} ${platform.slug == 'android' ? 'android' : ''} ${platform.slug == 'ios' ? 'ios' : ''} ${platform.slug == 'linux' ? 'linux' : ''}`}></span> {platform.name}</a>
            </li>
        ))}
    </ul>
  )
}
