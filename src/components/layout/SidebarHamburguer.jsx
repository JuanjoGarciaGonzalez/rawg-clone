import React from "react"
import { MenuPlatforms } from "./MenuPlatforms"
import { useContext } from 'react'
import { UserContext } from '../../App'
import {firebaseApp} from '../../firebase/FirebaseApp'
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(firebaseApp)

export const SidebarHamburguer = () => {

    const closeOffcanvas = () => {
        const sidebar = document.querySelector('.offcanvas')
        sidebar.classList.remove('opened')
    }

    const user = useContext(UserContext)

    const handleLogout = () => {
        signOut(auth).then(() => {
            window.location.href = '/'
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="offcanvas">
            <div className="offcanvas-container">
            <button className="offcanvas-close" onClick={closeOffcanvas}>
                
                </button>
                 <aside className='sidebar'>
                    {user && <a href='/profile' className='profile-aside profile-link'>
                        <img src={user.photoURL ? user.photoURL : '../../../public/profile-placeholder.jpg'} alt={user.email} />
                        {user.email}
                    </a>}
                    <nav>
                        <ul className="sidebar-offcanvas-login">
                            {user &&
                                <li><a href='' onClick={handleLogout} className='api-link login-icon'></a> <span>Log out</span></li>
                            }
                            {user == null &&
                                <li><a href='/login' className='api-link login-icon'></a> <span>Log in</span></li>
                            }
                            {user == null &&
                                <li><a href='/signup' className='api-link signup-icon'></a> <span>Sign up</span></li>
                            }
                        </ul>
                        <ul className='sidebar-menu'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/games'>All Games</a>
                            </li>
                        </ul>
    
                        <MenuPlatforms />
                    </nav>
                </aside>
            </div>
            
        </div>
    )
}