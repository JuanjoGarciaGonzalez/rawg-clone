import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <nav>
            <ul className='sidebar-menu'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/all'>All Games</a>
                </li>
            </ul>
        </nav>
    </aside>
  )
}
