import React from 'react'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}
