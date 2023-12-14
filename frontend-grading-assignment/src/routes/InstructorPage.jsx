import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import lec from "../images/lec.png"
// import lec31 from "../images/lec31.png"
import lec3 from "../images/lec3.png"
// import lec4 from "../images/lec4.png"
// import lec6 from "../images/lec6.png"
// import lec7 from "../images/lec7.png"
// import lec9 from "../images/lec9.png"
// import lec10 from "../images/lec10.png"

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
     {/* </div>  
     <div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Morris-Jones Mensah</h1> 
            <h1 className="text2">0246637237</h1> 
            <h1 className="text2">morrisjay12@gmail.com</h1> 
            <h1 className="text2">RIPPS Room 13</h1> 
            <h1 className="text2">UGRC 223</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec31} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Albert Larweh Mawu</h1> 
            <h1 className="text2">0548412950</h1> 
            <h1 className="text2">mawulabert32@gmail.com</h1> 
            <h1 className="text2">Math Room 16</h1> 
            <h1 className="text2">MATH 223</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec4} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Denis Arku</h1> 
            <h1 className="text2">0206482471</h1> 
            <h1 className="text2">ardenis2@gmail.com</h1> 
            <h1 className="text2">Stat Room 30</h1> 
            <h1 className="text2">STAT 223</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec3} />
     </div>
        
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Esther Osei Mensah</h1> 
            <h1 className="text2">0502567421</h1> 
            <h1 className="text2">eoseimensah2@gmail.com</h1> 
            <h1 className="text2">Stat 18</h1> 
            <h1 className="text2">STAT 230</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec9} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Michael Agbo Sorli Tetteh</h1> 
            <h1 className="text2">0548932750</h1> 
            <h1 className="text2">agbotetteh52@gmail.com</h1> 
            <h1 className="text2">Computer Science Department Room 6</h1> 
            <h1 className="text2">DCIT 205</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec7} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Abdulaih Dwumfour Aziz</h1> 
            <h1 className="text2">0598328439</h1> 
            <h1 className="text2">abduaziz32@gmail.com</h1> 
            <h1 className="text2">Computer Science Department Room 9</h1> 
            <h1 className="text2">DCIT 203</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec10} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Asare Tuah</h1> 
            <h1 className="text2">0254726321</h1> 
            <h1 className="text2">asare34tuah@gmail.com</h1> 
            <h1 className="text2">Math 07</h1> 
            <h1 className="text2">MATH 121</h1> 
        </div>
     </div>
     <div className="lass"
     style="display: flex;">
        <div className="pic12"
        style="display: flex;">
        <img className="pic1"src={lec6} />
     </div>
        <div className="text12"
        style="display: inline-block;">
            <h1 className="text1"><strong>Name :</strong></h1>
            <h1 className="text1"><strong>Contact :</strong></h1>
            <h1 className="text1"><strong>Email :</strong></h1> 
            <h1 className="text1"><strong>Office :</strong></h1> 
            <h1 className="text1"><strong>Course :</strong></h1> 
     </div>
        <div className="text121"
        style="display: inline-block;">
            <h1 className="text2">Mark Atta Mensah</h1> 
            <h1 className="text2">0542843790</h1> 
            <h1 className="text2">markmensahattah82@gmail.com</h1> 
            <h1 className="text2">Computer Science Department Room 4</h1> 
            <h1 className="text2">DCIT 103</h1> 
        </div>
     </div>
     </div>
        </div> */}
        </div>
        </div>
            <div style={{display: "flex"}} >
            <div className="pic12">
                <img src={lec3} style={{width: "100px", height: "90px"}}/>
            </div>
                <div style={{display: "inline-block;"}}>
                
            <h3 className="text1"><strong>Name :</strong></h3>
            <h3 className="text1"><strong>Contact :</strong></h3>
            <h3 className="text1"><strong>Email :</strong></h3> 
            <h3 className="text1"><strong>Office :</strong></h3> 
            <h3 className="text1"><strong>Course :</strong></h3> 
     
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default InstructorPage