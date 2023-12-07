import React from 'react'
import './Footer.css'


export default function Footer(){
    return(
        <>
        <div className='footer_container'>
        <div className='footer_section'>
           
            <div className='first_section_item_1'>CompanyLogo</div>
            <br />
            <br />

            <div className='first_section_item_2'>Menu</div>
            <br />
            <br />

            <div className='first_section_item_3'>Company @ 2015</div>
            <br />
            <br />

            <div className='first_section_item_4'>Icons</div>
        </div>
        <div className='footer_section'>
            <br />
            <br />
        

            <label htmlFor="">Contact us</label>
            <input type="email" placeholder='Email' className='email'/>
            <br />
            <br />

            <input type="text" placeholder='Enter messeage' className='textbox'/>
        </div>
        </div>
    
        
        </>
    )
        
}
