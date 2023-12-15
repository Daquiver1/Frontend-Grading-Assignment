import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-4'>
                    <h1 style={{textAlign:'center'}}>Welcome.</h1>
                    <p>Here you can check your grades, report missing grades and contact your instructors.</p>
                    <Link to='/Login' className='btn btn-primary'>Click here to login and check your grades.</Link>
                </div>
    </MainLayout>
  )
}

export default HomePage