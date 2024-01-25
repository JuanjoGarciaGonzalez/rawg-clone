import React from 'react'

export const BreadcrumbsGames = (props) => {
  return (
    <div className='breadcrumbs'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li>/</li>
            <li><a href="/games">Games</a></li>
            <li>/</li>
            <li className='actual'>{props.game}</li>
        </ul>
    </div>
  )
}
