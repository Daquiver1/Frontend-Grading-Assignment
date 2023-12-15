import React from 'react';
import './Hero.css';
import Title from '../../common/title/Title';

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className='row'>
                    <Title subtitle="WELCOME TO ACADEMIA" title="Trustworthy Site For Your Academics"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint numquam velit, quod cum nemo amet! Iste adipisci nam illum ratione rem placeat necessitatibus doloribus consequuntur hic, ullam eaque! Ad.</p>
                    <div className="button">
                        <button className="primrary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW PROFILE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero