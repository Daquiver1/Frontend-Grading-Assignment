import React from 'react'


import Header from './Header'
import './Home.css'
import './footer'
import Footer from './footer'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <Header/>
        <div className="hero-image">
            <img src="/hero_2.jpg" alt="hero" id='hero_image'/>
            
    <div className="hero-text">
        <h1>Welecome</h1>
        <br />
    
        <p>We've got the numbers</p>
        <br />
        <br />
        <Link to="/Login_page"><button className='login_btn'>Login</button></Link>
    </div>
</div>

    <div>
        <h4>
        Lorem ipsum, or lipsum as it is sometimes known,
         is dummy text used in laying out print, graphic or web designs.
          The passage is attributed to an unknown typesetter in the 15th
           century who is thought to have scrambled parts of Cicero's 
        De Finibus Bonorum et Malorum for use in a type specimen book.
         It usually begins with:
        </h4>
    </div>
        <Footer/>
        
        </>
    )
}
