import React, { useEffect } from 'react'
import { useState } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

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
        <Gallery>
           {screenshots != null ? screenshots?.map((screenshot) => (
            <div className='game-page-gallery' key={screenshot.id}>
                <Item
                original={screenshot.image}
                thumbnail={screenshot.image}
                width={screenshot.width}
                height={screenshot.height}
                id={screenshot.id}
                cropped
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={screenshot.image} className='game-page-media-img'/>
                )}
                </Item>
            </div>
                
           )) : ''}
        </Gallery>
    )
}
