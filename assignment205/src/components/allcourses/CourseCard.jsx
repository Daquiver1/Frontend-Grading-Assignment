import React from 'react'
import { courseCard } from '../../dummydata'

const CourseCard = () => {
  return (
    <>
        <section className='courseCard'>
            <div className="container grid2">
                {courseCard.map((val) => {
                    return (
                        <div className="items">
                            <div className="content flex">
                                <div className="left">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                </div>
                                <div className="text">
                                    <h1>{val.courseName}</h1>
                                    <div className="rate">
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <label htmlFor="">(5.0)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default CourseCard