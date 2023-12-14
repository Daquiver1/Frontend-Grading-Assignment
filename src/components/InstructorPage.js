import React from "react"
import Navbar from "./Navbar"
import unknown from '../images/unknown.jpg'
import {FaMailBulk} from "react-icons/fa"



const InstructorPage = () => {
  return (
    <>
    <Navbar/>
      <div style={{border:'1px solid lightgray', margin:'80px', borderRadius:'5px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'100px' }}>
          <div>
            <b className="text-4xl text-center " style={{marginLeft:'20px'}}>About the team</b>
            <p className="text-justify" style={{margin:'20px'}}>We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
          </div>
          <div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px', marginBottom:'100px' }}>
              <div>
                <img src={unknown} alt="lecturer" style={{height: '200px', width:'200px'}}/>
              </div>
              <div style={{marginLeft:'40px', marginTop:'40px'}}>
                <p>James Brown</p>
                <p>Science Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> jamesbrown@gmail.com</p>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={unknown} alt="lecturer" style={{height: '200px', width:'200px'}}/>
              </div>
              <div style={{marginLeft:'40px', marginTop:'40px'}}>
                <p>James Brown</p>
                <p>Science Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> jamesbrown@gmail.com</p>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px', marginBottom:'100px' }}>
              <div>
                <img src={unknown} alt="lecturer" style={{height: '200px', width:'200px'}}/>
              </div>
              <div style={{marginLeft:'40px', marginTop:'40px'}}>
                <p>James Brown</p>
                <p>Science Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> jamesbrown@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>



      </div>

    </>
  )
}

export default InstructorPage