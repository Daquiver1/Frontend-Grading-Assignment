import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageArea.css';

const ImageArea = () => {
    return(
        <div className='page-content'> 
                <div className='image-container'>
                    <img  className='img1' src='Login.png'></img>
                    <p className='text1'> Login</p><p className='text2'>Help and Support</p>
                    <img  className='img2' src='section-image.jpg'></img>
                </div>
                
            
        </div>
    )
}

export default ImageArea;