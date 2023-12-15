import React from 'react'
import Back  from '../common/back/Back'
import CoursesCard from './CoursesCard'

const CourseHome = () => {
  return (
    <>
        <h1>Your Courses</h1>
        < Back title = "View Your Course"/>
        <CoursesCard/>
        </>
  )
}

export default CourseHome 