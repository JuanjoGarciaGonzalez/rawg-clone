import React, { useEffect } from 'react'
import { useState } from 'react';

export const GamePageGallery = (props) => {

    const [screenshots, setScreenshots] = useState(null);

    useEffect(() => {
        if (props.game) {
            fetch(`https://rawg.io/api/games/${props.game}/screenshots?key=${import.meta.env.VITE_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setScreenshots(data.results);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
        }
    }, [props.game]);
    

    return (
        <div>
           {screenshots != null ? screenshots?.map((screenshot) => (
                <img key={screenshot.id} src={screenshot.image} alt={screenshot.id} className='game-page-media-img'/>
           )) : ''}
        </div>
    )
}
