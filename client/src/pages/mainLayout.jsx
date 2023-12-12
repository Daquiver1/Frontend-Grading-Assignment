import React, { useRef } from 'react'
import Footer from '../components/footer'
import { Link, Outlet,useLocation} from 'react-router-dom'
import Navbar from '../components/navbar'

    export default function MainLayout() {

  return (
    <div className='flex grow gap-4'>

      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
