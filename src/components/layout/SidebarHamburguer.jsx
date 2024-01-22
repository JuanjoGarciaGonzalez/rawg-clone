import React from "react"
import { MenuPlatforms } from "./MenuPlatforms"

export const SidebarHamburguer = () => {

    const closeOffcanvas = () => {
        const sidebar = document.querySelector('.offcanvas')
        sidebar.classList.remove('opened')
    }

    return (
        <div className="offcanvas">
            <button className="offcanvas-close" onClick={closeOffcanvas}>
                
            </button>
             <aside className='sidebar'>
                <nav>
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
    )
}