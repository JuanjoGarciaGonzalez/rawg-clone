import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'
import {firebaseApp, db} from '../../firebase/FirebaseApp'
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore"
import { GameCard } from '../games/GameCard'
import { useFetch } from '../../useFetch'

export const Profile = () => {

    const user = useContext(UserContext)
    const [loading, setLoading] = React.useState(true)
    const [games, setGames] = React.useState([])
    const [error, setError] = React.useState(null)

    
    useEffect(() => {
        if (user) {
            const userRef = doc(db, "users", user.uid)
            getDoc(userRef).then((doc) => {
                if (doc != null) {
                    let gamesAdded = addGames(doc.data().games)
                    console.log(gamesAdded)
                } else {
                    console.log("No such document!")
                }
                setLoading(false)
            }).catch((error) => {
                console.log("Error:", error)
            })

        }

    }, [user])

    const addGames = (gamesDB) => {
        let gamesArray = []
        gamesDB.forEach(async game => {
            let data
            try {
                const response = await fetch(`https://rawg.io/api/games/${game}?key=${import.meta.env.VITE_API_KEY}`)
                data = await response.json()
                
            } catch (error) {
                setError(error.message)
            }finally {
                gamesArray.push(data)
                if(gamesArray.length === gamesDB.length) {
                    setGames(gamesArray)
                }
            }
        })
        
    }

    return (
        <section className='content profile padding'>
            {loading && <div className='lds-dual-ring'></div>}
            {user && <h2 className='page-title'><img src={user.photoURL ? user.photoURL : '../../../public/profile-placeholder.jpg'} className='photo'/> {user?.displayName ? user?.displayName : user?.email}</h2>}

            <div className='library'>
                <p className='library-title'>Library <img src='./../public/added.png'/></p>
                
                <article className='game-list'>
                    {games.length > 0 ? games.map(game => (
                        <GameCard key={game.id} data={game} />
                    )) : <p>No games added yet</p>}
                    {error && <p>Error: {error}</p>}
                </article>

            </div>
        </section>
    )
}
