import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'
import {firebaseApp} from '../../firebase/FirebaseApp'
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const Profile = () => {

    const user = useContext(UserContext)
    const [loading, setLoading] = React.useState(true)

    
    useEffect(() => {
        if (user) {
            setLoading(false)
            console.log(user)
        }

    })

    return (
        <section className='content profile padding'>
            {loading && <div className='lds-dual-ring'></div>}
            {user && <h2 className='page-title'>{user?.displayName ? user?.displayName : user?.email}<img src={user.photoURL ? user.photoURL : '../../../public/profile-placeholder.jpg'} className='photo'/> </h2>}
        </section>
    )
}
