import React from 'react'
import { MenuPlatforms } from './MenuPlatforms'

export const Sidebar = () => {
  return (
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
  )
}
