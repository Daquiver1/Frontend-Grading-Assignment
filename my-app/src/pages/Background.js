import React from 'react'
import Image from './Photos/Image.jpg'
import '../pages/Background.css'


function Background () {
 return (
    <div>
      <img className="background-image" src={Image} alt="" />
      <div className="text-over-image"><h1>The Missing Grade Report System  is a software tool that identifies, reports, and resolves missing grade issues within educational institutions. This system can improve the accuracy and timeliness of grade reports, leading to more equitable assessments of students' performance.
      </h1></div>
    </div>
 )
}

export default Background