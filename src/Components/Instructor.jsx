import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Dashboard } from '../Components/Dashboard';
import { Report } from '../Components/GradeReport';
import { MissingGrade } from '../Components/Missinggrade';
import '../Pagestyles/Footer.css';
// import '../Pagestyles/Homepage.css';
import { Login } from '../Components/Login';
import '../Pagestyles/Instructor.css';
import { Bars } from './Bars';
import { Footer } from './Footer';
import { Homepage } from './Homepage';

export const Instructor = () =>{
    const[dropdown , setdropdown] = useState(false);
    const [selectedLecturer, setSelectedLecturer] = useState({});

  const handleIconClick = (lecturer) => {
    setSelectedLecturer(lecturer);
  };
    const lecturers = [
        { id: 1, name: 'Dr. John Smith', email: 'john.smith@example.com' },
        { id: 2, name: 'Prof. Emily Johnson', email: 'emily.johnson@example.com' },
        { id: 3, name: 'Dr. Michael Davis', email: 'michael.davis@example.com' },
        { id: 4, name: 'Prof. Sarah Brown', email: 'sarah.brown@example.com' },
        { id: 5, name: 'Dr. James Wilson', email: 'james.wilson@example.com' },
        {color:'#8c1515', id: 6, name: 'Prof. Jessica Taylor', email: 'jessica.taylor@example.com' },
        {color:'#8c1515', id: 7, name: 'Dr. Matthew Miller', email: 'matthew.miller@example.com' },
        {color:'#8c1515', id: 8, name: 'Prof. Olivia White', email: 'olivia.white@example.com' },
        {color:'#8c1515', id: 9, name: 'Dr. Ethan Hall', email: 'ethan.hall@example.com' },
        
        
      ];
      
      
      const navlinks = [
        {reference:'home' , id:7},
        {lecturer:'Mark Attah Mensah', course:'DCIT103', reference: 'login', id: 1, link: 'login' },
        {lecturer:'Josiah Ok', course:'DCIT201', reference: 'dashboard', id: 2, link: 'Dashboard' },
        {lecturer:'Solomon Mensah', course:'DCIT105', reference: 'report', id: 3, link: 'Grade report' },
        {color:'white',lecturer:'Wood Clarke', course:'DCIT205', reference: 'report', id: 4, link: 'Missing grade' },
        { color:'white',lecturer:'Peter Anderson', course:'DCIT203', reference: 'instructor', id: 5, link: 'Instructor' },
        {color:'white', lecturer:'Lady Adelaide', course:'DCIT207', reference: 'Faqs', id: 6, link: 'Help and support' },]

        const [currentpage, setCurrentPage] = useState('instructor');
        const renderComponent = () => {
          switch (currentpage) {
            case 'current':
            return <Report />
            case 'home':  
              return <Homepage />;
            case 'dashboard':
              return <Dashboard />;
            case 'report':
              return <MissingGrade />;
            case 'instructor':
              return <RealInstruct />;
            case 'Faqs':
              return <Bars />;
              case 'login':
                return <Login />
            default:
              return '';
          }
        };

        // const Alert = () => {
        //     return(
        //       <div className='alertboxx'>
        //       <p>Your request has been received.</p>
        //     </div>
        //     )
        //    }

        const Alert = () => {
          return(
            <div className='alertboxx'>
            <p>Your request has been received.</p>
          </div>
          )
         }

        const handleAlert = (event) => {
            event.preventDefault();
            setdropdown(!dropdown)
            setTimeout(() => {
              const alertContainer = document.querySelector(".alertboxx");
                alertContainer.style.display = "none";
            }, 2000);
          };

          const RealInstruct = () => {
            return(
              <div className="container">
            <div className="flexboxx">
            <nav className="nav">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={50} width={200} />
            <div className="navlinkss">
            <div className="usser">
                   Lecturer contact
                 </div>
                <ul>
                    {lecturers.map(info => (
                    <li key={info.id} >
                    <a href=""
                    style={{color:info.color}} 
                    >
                    {info.email}
                    </a>
                    <FaEnvelope color='#8c1515' onClick={() => handleIconClick(info)} className='bounce'/>
                    </li>))}
                   
                 </ul>
            </div>
            </nav>
            {/* Form space Form space */}
           <div className="formdiv">
           { dropdown  &&  <Alert /> }
           <nav className="navv">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={40} width={160} />
            <div className="navlinkx">
                <ul>
                    {navlinks.map(link => (<li key={link.id}><a href=""
                    onClick={(e) => { e.preventDefault(); setCurrentPage(link.reference); }}
                    >{link.link}</a></li>))}
                </ul>
            </div>
            </nav>

           <form action="">

           <input type='text' placeholder='lecturer name' className='lecturer' value={selectedLecturer.name || ''} readOnly/>  
            <input type='email'placeholder='Lecturer email' className='email' value={selectedLecturer.email || ''} readOnly/> 
            <textarea name="" id="" cols="30" rows="5" placeholder='Why the change ?'>
            </textarea>
            <button onClick={handleAlert}>Submit</button>

           </form>
           </div>
            </div>

            <Footer />
            </div>
            )
          }
    return(
        <>
        {renderComponent()}
        </>
    )
}