import React from 'react'
import './hero.css'
import Title from '../../components/common/title/Title'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='We Guard Your Grades'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quis, quas omnis optio adipisci delectus cum, debitis perferendis id molestias minima dolores sit cumque iure deserunt. Similique iste modi excepturi.</p>
                    <div className="button">
                        <button className='primrary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button >
                        VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
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