import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { AllGames } from '../components/pages/AllGames'

export const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<AllGames/>}/>
    </Routes>
  )
}