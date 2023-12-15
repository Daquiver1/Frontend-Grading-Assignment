import React from 'react'
import image from '../assets/bg-image-2.jpg';
import './herosection.css'

function HeroSection(){
    return(
        <>
        <div id = "imgHero">
           <img src = {image} alt = "Hero HEADER image">
            </img>    
            </div>
        <div id = "imageText">
            GRADING SYSTEM
        </div>
        </>
        
    )
}

export default HeroSection