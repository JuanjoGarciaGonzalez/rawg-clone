import React, { useEffect } from 'react'


export const Header = () => {

    useEffect(() => {
        const searchBar = document.querySelector('.search-bar')
        const searchBarInput = document.querySelector('.search-bar input')
    
        searchBarInput.addEventListener('focus', () => {
            searchBar.classList.add('focused')
        })
    
        searchBarInput.addEventListener('focusout', () => {
            searchBar.classList.remove('focused')
        })

        searchBarInput.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                const searchInputValue = searchBarInput.value
                window.location.href = '/search/' + searchInputValue
            }
        })
    })

    const openOffcanvas = () => {
        const sidebar = document.querySelector('.offcanvas')
        sidebar.classList.add('opened')
    }

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault()
            document.querySelector('.search-bar input').focus()
        }
    })

  return (
    <header className='header'>
        <h1 className='logo'><a href='/'>RAWG</a></h1>
        <div className='search-bar'>
            <svg className='search-bar-lens' alt="Search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
            <input type='text' placeholder='Search games'/>
            <div className='search-bar-shortcut'>
                <span>Ctrl</span>+<span>S</span>
            </div>
        </div>
        <a href='/login' className='api-link'>LOGIN</a>
        <a href='/signup' className='api-link'>SIGNUP</a>
        <a href='https://api.rawg.io/docs/' target='_blank' className='api-link'>API</a>
        <button className='buttonHam' onClick={openOffcanvas}>
            <svg className="SVGInline-svg header-menu__icon-svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.8h16M1 9h16M1 16.2h16" strokeWidth="2" stroke="#FFF" fill="none" strokeLinecap="round"></path></svg>
        </button>
    </header>
  )
}
