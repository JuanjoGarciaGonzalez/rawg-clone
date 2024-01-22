import React from "react"
import { MenuPlatforms } from "./MenuPlatforms"

export const SidebarHamburguer = () => {

    const closeOffcanvas = () => {
        const sidebar = document.querySelector('.offcanvas')
        sidebar.classList.remove('opened')
    }

    return (
        <div className="offcanvas">
            <div className="offcanvas-container">
            <button className="offcanvas-close" onClick={closeOffcanvas}>
                
                </button>
                 <aside className='sidebar'>
                    <nav>
                        <ul className="sidebar-offcanvas-login">
                            <li><a href='/login' className='api-link login'></a> <span>Log in</span></li>
                            <li><a href='/signup' className='api-link signup'></a> <span>Sign up</span></li>
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