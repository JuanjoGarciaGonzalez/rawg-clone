import React from 'react'

export const GameCard = (props) => { 

  return (
    <div className='game-card' key={props.data.id}>
        <div className='game-card-image'>
            {props.data.background_image != null ? <img src={props.data.background_image} alt={props.data.name} loading="lazy"/> : ''}
        </div>
        <div className='game-card-content'>
            {props.data.parent_platforms != null ? props.data.parent_platforms.map((platform) => (
                <span className={`game-card-platform ${platform.platform.slug == 'pc' ? 'pc' : ''} ${platform.platform.slug == 'playstation' ? 'play' : ''} ${platform.platform.slug == 'xbox' ? 'xbox' : ''} ${platform.platform.slug == 'mac' ? 'mac' : ''} ${platform.platform.slug == 'nintendo' ? 'nintendo' : ''} ${platform.platform.slug == 'android' ? 'android' : ''} ${platform.platform.slug == 'ios' ? 'ios' : ''} ${platform.platform.slug == 'linux' ? 'linux' : ''}`} key={platform.platform.id}></span>
            )) : ''}
            <h3><a href={`/games/${props.data.slug}`}>{props.data.name}</a></h3>
            <span className='rating'><img src='./../../../public/plus.svg' alt='plus'/> {props.data.added}</span>
            {props.data.metacritic != null ? <span className={`metacritic ${props.data.metacritic >= 50 ? 'green' : 'red'}`}>{props.data.metacritic}</span> : '' }

            <div className='game-card-content-hidden'>
                <div>
                
                    <h4>Released</h4>
                    <span>{props.data.released}</span>
                </div>
                { props.data.genres != null ? <div>
                    <h4>Genres</h4>
                    <div>{props.data.genres.map( (genre) => <span className={`genres ${genre.slug}`} key={genre.id}>{genre.name} </span>)}</div>
                </div> : '' }

                <a href=''>Show more like this <img src='./../../../public/arrow.svg'/></a>
            </div>
        </div>
    </div>
  )
}
