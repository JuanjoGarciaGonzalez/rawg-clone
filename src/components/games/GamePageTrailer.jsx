import React, { useEffect } from 'react'
import { useState } from 'react';

export const GamePageTrailer = (props) => {

    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        if (props.game) {
            fetch(`https://rawg.io/api/games/${props.game}/movies?key=${import.meta.env.VITE_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setTrailer(data.results);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
        }
    }, [props.game]);

    console.log(trailer)

    return (
        <div>
           
        </div>
    )
}
