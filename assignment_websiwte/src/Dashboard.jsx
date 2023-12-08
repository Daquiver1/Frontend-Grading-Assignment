import React from 'react'
import './Dashboard.css'
import Header from './Header'
import { Link } from 'react-router-dom'


export default function Dashboad(){
    return(
        <>
        <Header/>
        <div className='main_container'>
        <div className='dashboard_profile'>
            <div><img src="/profile_pic.jpg" alt="profile pic" className='profile_pic' /></div>
            <div><h3>Gifty Nyarko</h3></div>
            <div>sarkodiekurler@gmail.com</div>
            <Link to="/"><div><button className='sign_out'>sign out</button></div></Link>
        </div>
        <div className='dashboard_card_container'>
            <div className='dashboard_card'>
                <div>Lv 100 First Sem</div>
                <div>CCT: 18</div>
                <div>CGPA: 3.5</div>
            </div>
            <div className='dashboard_card'>
                <div>Lv 100 second Sem</div>
                <div>CCT: 36</div>
                <div>CGPA: 3.6</div>
            </div>
            <div className='dashboard_card'>
                <div>Level 200 First Sem</div>
                <div>CCT: </div>
                <div></div>
            </div>
            <div className='dashboard_card'>Element</div>
        </div>
        </div>
        </>
    )
}

