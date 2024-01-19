import React from 'react'
import { Header } from './layout/Header'
import { Routers } from '../routes/Routers'
import { Sidebar } from './layout/Sidebar'
import { Footer } from './layout/Footer'
import { SidebarHamburguer } from './layout/SidebarHamburguer'

export const Layout = () => {
  return (
    <>
        <Header />
        <div className='content-wrapper'>
            <Sidebar />
            <Routers />
        </div>
        <Footer />
        <SidebarHamburguer />
    </>
  )
}
