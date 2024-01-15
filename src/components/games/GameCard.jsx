import React from 'react'

export const GameCard = (props) => {

  return (
    <div className='game-card' key={props.data.id}>
        <a href={`/games/${props.data.slug}`}>
            <div className='game-card-image'>
                {props.data.background_image != null ? <img src={props.data.background_image} alt={props.data.name} loading="lazy"/> : ''}
            </div>
            <div className='game-card-content'>
                {props.data.parent_platforms != null ? props.data.parent_platforms.map((platform) => (
                    <span className={`game-card-platform ${platform.platform.slug == 'pc' ? 'pc' : ''} ${platform.platform.slug == 'playstation' ? 'play' : ''} ${platform.platform.slug == 'xbox' ? 'xbox' : ''} ${platform.platform.slug == 'mac' ? 'mac' : ''} ${platform.platform.slug == 'nintendo' ? 'nintendo' : ''} ${platform.platform.slug == 'android' ? 'android' : ''} ${platform.platform.slug == 'ios' ? 'ios' : ''} ${platform.platform.slug == 'linux' ? 'linux' : ''}`} key={platform.platform.id}></span>
                )) : ''}
                <h3>{props.data.name}</h3>
                <span className='rating'><img src='./../../../public/plus.svg' alt='plus'/> {props.data.added}</span>
                {props.data.metacritic != null ? <span className={`metacritic ${props.data.metacritic >= 50 ? 'green' : 'red'}`}>{props.data.metacritic}</span> : '' }
            </div>
            
        </a>
    </div>
  )
}
