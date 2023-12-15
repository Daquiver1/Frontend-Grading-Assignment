import React from 'react'
import { useLocation } from "react-router-dom"

const Back = () => {
  const location = useLocation()
  return (
    <div>
      <section className='back'>
        <h2>Home / {}</h2>
      </section>
    </div>
  )
}

export default Back