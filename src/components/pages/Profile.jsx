import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'
import firebaseApp from '../../firebase/FirebaseApp'
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const Profile = () => {

    const user = useContext(UserContext)
    const [loading, setLoading] = React.useState(true)

    
    useEffect(() => {
        if (user) {
            setLoading(false)
        }

    })

    return (
        <section className='content profile'>
            {loading && <div className='lds-dual-ring'></div>}
            {user && <h2 className='page-title'>Hi, {user?.email}</h2>}
        </section>
    )
}
