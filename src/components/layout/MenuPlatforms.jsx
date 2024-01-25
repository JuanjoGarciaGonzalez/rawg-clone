import React from 'react'
import { useFetch } from '../../useFetch'

export const MenuPlatforms = () => {
  function openSidebar() {
    console.log('open')
    const menuPlatforms = document.getElementsByClassName('platforms')
    menuPlatforms[0].classList.toggle('open')
    menuPlatforms[1].classList.toggle('open')
  }
    const {data, loading, error} = useFetch(`https://rawg.io/api/platforms/lists/parents?token&key=${import.meta.env.VITE_API_KEY}&ordering=releveance`)
  return (
    <div className='sidebar-menu-wrapper'>
    <ul className='sidebar-menu platforms'>
        <li>Platforms</li>
        {data?.results.map((platform) => (
          platform.platforms.map((platformItem) => (
            <li className='platform-menu-item' key={platformItem.id}>
                <a href={`/platforms/${platformItem.id}`} className='platform-menu__link'><span className='game-card-platform'></span> {platformItem.name}</a>
            </li>
        ))
        ))}
        
    </ul>
    <div className='platform-menu-item' onClick={openSidebar}><a href='#' className='show-more platform-menu__link'><svg className="SVGInline-svg discover-sidebar__icon-svg game-card-platform" viewBox="0 0 19 35" width="19" height="35" xmlns="http://www.w3.org/2000/svg"><path d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z" fill="#FFF" fillRule="evenodd"></path></svg> Show more</a></div>
    </div>
  )
}
