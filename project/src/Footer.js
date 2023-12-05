import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
<div className='main-footer'>
                <div className='container'>
                    
                    <div className='row'>
                        <p className='col-sm'>
                            &copy; {new Date().getFullYear()}     EMMANUEL  AKPALU | ALL right reserved | Terms of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>    )
}

export default Footer;