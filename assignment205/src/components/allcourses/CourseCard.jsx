import React from 'react'

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