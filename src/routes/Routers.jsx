import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { AllGames } from '../components/pages/AllGames'
import { Search } from '../components/pages/Search'
import { GamePage } from '../components/games/GamePage'
import { GamesPlatformPage } from '../components/platforms/GamesPlatformPage'
import { LoginPage } from '../components/pages/LoginPage'
import { SignupPage } from '../components/pages/SignupPage'
import { Profile } from '../components/pages/Profile'

export const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games' element={<AllGames/>}/>
        <Route path='/search/:term' element={<Search/>}/>
        <Route path='/games/:term' element={<GamePage/>}/>
        <Route path='/platforms/:term' element={<GamesPlatformPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}