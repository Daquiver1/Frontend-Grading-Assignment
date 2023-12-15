import React from 'react'
import './DashboardComp.css'
import Db_img from '../Assets/std2.png'

const DashboardComp = () => {
  return (
    <div className="image-conatiner">
      <img src={Db_img} alt="Displayed" className="responsive-image" />
    </div>
  )
}

export default DashboardComp
