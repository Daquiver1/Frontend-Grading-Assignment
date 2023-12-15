import React from "react"
import Navbar from "./Navbar"
import unknown from '../images/unknown.jpg'
import {FaMailBulk} from "react-icons/fa"
import instructor_1 from '../images/instructor_1.jpg'
import instructor_2 from '../images/instructor_2.jpg'
import instructor_3 from '../images/instructor_3.jpg'
import instructor_4 from '../images/instructor_4.jpg'
import instructor_5 from '../images/instructor_5.jpg'
import instructor_6 from '../images/instructor_6.jpg'
import instructor_7 from '../images/instructor_7.jpg'




const InstructorPage = () => {
  return (
    <>
    <Navbar/>
      <div style={{border:'1px solid lightgray', margin:'80px', borderRadius:'5px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'100px' }}>
          <div>
            <b className="text-4xl text-center " style={{marginLeft:'20px'}}>About the team</b>
            <p className="text-justify" style={{margin:'20px'}}>We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our students.</p>
          </div>
          <div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px', marginBottom:'100px' }}>
              <div>
                <img src={instructor_1} alt="lecturer" style={{height: '230px', width:'230px' , borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Obed Asamoah</p>
                <p>Introduction to Math Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"><u> asamoahobed67@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={instructor_2} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Stephen Adjei</p>
                <p>Introduction to Management Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> <u>stephenadjei@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px', marginBottom:'100px' }}>
              <div>
                <img src={instructor_3} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Oheneba Nti Bekoe</p>
                <p>Science Basics Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"><u> bekoentiohe556@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={instructor_4} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Monica Sarfo</p>
                <p>Arts and History Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> <u>samonica900@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={instructor_5} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Sandra Coffie</p>
                <p>English Writing Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> <u>cosandy07@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={instructor_6} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Daniel Gelly</p>
                <p>Math and Numbers Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> <u>kwabenagangaa@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
              
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1.8fr 3fr', marginTop:'0px', marginLeft:'100px' ,marginBottom:'100px'}}>
              <div>
                <img src={instructor_7} alt="lecturer" style={{height: '230px', width:'230px', borderRadius:'5px'}}/>
              </div>
              <div style={{marginLeft:'40px'}}>
                <p>Nimako Kofi Christian</p>
                <p>Philosophy of Science Tutor</p>
                <div style={{display: 'flex'}} className="pt-2">
                  <FaMailBulk className="icon cart" style={{height: '28px', width:'25px'}}/>
                  <p className="pl-2"> <u>stephenadjei@gmail.com</u></p>
                </div>
                <div className="text-gray" >
                  <input type="text" placeholder="Type your message..." className="px-2 py-2"  style={{height: '100px', fontStyle:'italic' , width:'250px', borderRadius:'5px', marginTop:'5px'}}/>
                </div>
                <div>
                  <button style={{background: 'black',color: 'white', marginTop:'3px', borderRadius:'5px', padding:'5px', width:'60px'}}>Send</button>
                </div>
              </div>
            </div>
          
          </div>
          
        </div>



      </div>

    </>
  )
}

export default InstructorPage;