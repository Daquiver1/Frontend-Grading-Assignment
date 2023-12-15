import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import lec from "../images/lec.png"
import lec31 from "../images/lec31.png"
import lec3 from "../images/lec3.png"
import lec4 from "../images/lec4.png"
import lec6 from "../images/lec6.png"
import lec7 from "../images/lec7.png"
import lec9 from "../images/lec9.png"
import lec10 from "../images/lec10.png"

const InstructorPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{marginTop: "7rem"}}>
            <div className="head2">
        <h1 className="head">
            Welcome to the Instrctors page of the University of 
            Ghana Missing Grade Report System. 
        </h1>
        <p className="head, fs-4">
        This page provides 
            the student various instructors and their contact 
            details such as the course they teach, their emails, 
            the location of their offices and their contacts  
            in the respective departments.
        </p>
     </div>  
     <div className="top1">
        <h1 className="too" style={{textAlign: "center"}}>
           Instructors and their details
        </h1>
     </div>  
     <div>
        <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h4 className="text1"><strong>Name :</strong> 
                   <p4 className="text2">Morris-Jones Mensah</p4> </h4>
                  <h4 className="text1"><strong>Contact :</strong> 
                  <p4 className="text2">0246637237</p4>  </h4>
                  <h4 className="text1"><strong>Email :</strong> 
                  <p4 className="text2">morrisjay12@gmail.com</p4>  </h4> 
                  <h4 className="text1"><strong>Office :</strong>  
                  <p4 className="text2">RIPPS Room 13</p4> </h4> 
                  <h4 className="text1"><strong>Course :</strong>  
                  <p4 className="text2">UGRC 223</p4> </h4>
         </div>
     </div>
      <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec31} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Albert Larweh Mawu</h4> 
            <h4 className="text2">0548412950</h4> 
            <h4 className="text2">mawulabert32@gmail.com</h4> 
            <h4 className="text2">Math Room 16</h4> 
            <h4 className="text2">MATH 223</h4> 
        </div> */}
     </div>
      <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec4} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Denis Arku</h4> 
            <h4 className="text2">0206482471</h4> 
            <h4 className="text2">ardenis2@gmail.com</h4> 
            <h4 className="text2">Stat Room 30</h4> 
            <h4 className="text2">STAT 223</h4> 
        </div> */}
     </div>
     <div style={{display: "flex"}} >
            <div className="pic12">
                <img src={lec3} style={{width: "220px", }}/>
            </div>
                <div style={{display: "inline-block;"}}> 
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
                </div> 
            </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Esther Osei Mensah</h4> 
            <h4 className="text2">0502567421</h4> 
            <h4 className="text2">eoseimensah2@gmail.com</h4> 
            <h4 className="text2">Stat 18</h4> 
            <h4 className="text2">STAT 230</h4> 
        </div> */}
     </div>
        <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec9} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Michael Agbo Sorli Tetteh</h4> 
            <h4 className="text2">0548932750</h4> 
            <h4 className="text2">agbotetteh52@gmail.com</h4> 
            <h4 className="text2">Computer Science Department Room 6</h4> 
            <h4 className="text2">DCIT 205</h4> 
        </div> */}
     </div>
        <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec7} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Abdulaih Dwumfour Aziz</h4> 
            <h4 className="text2">0598328439</h4> 
            <h4 className="text2">abduaziz32@gmail.com</h4> 
            <h4 className="text2">Computer Science Department Room 9</h4> 
            <h4 className="text2">DCIT 203</h4> 
        </div> */}
     </div>
          <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec10} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
        {/* <div className="text121"
        style="display: inline-block;">
            <h4 className="text2">Asare Tuah</h4> 
            <h4 className="text2">0254726321</h4> 
            <h4 className="text2">asare34tuah@gmail.com</h4> 
            <h4 className="text2">Math 07</h4> 
            <h4 className="text2">MATH 121</h4> 
        </div> */}
     </div>
      <div style={{display: "flex"}} >
        <div className="pic12">
                <img src={lec6} style={{width: "220px", }}/>
         </div>
            <div style={{display: "inline-block;"}}>
                  <h3 className="text1"><strong>Name :</strong></h3>
                  <h3 className="text1"><strong>Contact :</strong></h3>
                  <h3 className="text1"><strong>Email :</strong></h3> 
                  <h3 className="text1"><strong>Office :</strong></h3> 
                  <h3 className="text1"><strong>Course :</strong></h3> 
         </div>
            {/* <div className="text121"
            style="display: inline-block;">
                  <h4 className="text2">Mark Atta Mensah</h4> 
                  <h4 className="text2">0542843790</h4> 
                  <h4 className="text2">markmensahattah82@gmail.com</h4> 
                  <h4 className="text2">Computer Science Department Room 4</h4> 
                  <h4 className="text2">DCIT 103</h4> 
            </div> */}
        </div> 
        </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default InstructorPage