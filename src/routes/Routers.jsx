import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { AllGames } from '../components/pages/AllGames'
import { Search } from '../components/pages/Search'

export const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<AllGames/>}/>
        <Route path='/search/:term' element={<Search/>}/>
    </Routes>
  )
}