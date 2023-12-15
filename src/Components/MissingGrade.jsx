import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Dashboard } from '../Components/Dashboard';
import { Report } from '../Components/GradeReport';
import { Instructor } from '../Components/Instructor';
import '../Pagestyles/Footer.css';
import '../Pagestyles/Homepage.css';
import '../Pagestyles/Missing.css';
import { Bars } from './Bars';
import { Footer } from './Footer';
import { Homepage } from './Homepage';
import { Login } from './Login';

export const MissingGrade = () =>{
    const[dropdown , setdropdown] = useState(false);
    const navlinks = [
        {id:7, reference:'home', link:'Home'},
        {lecturer:'Mark Attah Mensah', course:'DCIT103', reference: 'login', id: 1, link: 'login' },
        {lecturer:'Josiah Ok', course:'DCIT201', reference: 'dashboard', id: 2, link: 'Dashboard' },
        {lecturer:'Solomon Mensah', course:'DCIT105', reference: 'current', id: 3, link: 'Grade report' },
        {lecturer:'Wood Clarke', course:'DCIT205', reference: 'report', id: 4, link: 'Missing grade' },
        {lecturer:'Peter Anderson', course:'DCIT203', reference: 'instructor', id: 5, link: 'Instructor' },
        {lecturer:'Lady Adelaide', course:'DCIT207', reference: 'Faqs', id: 6, link: 'Help and support' },
       
    ]
    const [currentpage, setCurrentPage] = useState('report');
    const renderComponent = () => {
      switch (currentpage) {
        case 'current':
        return <Report />
        case 'login':
            return <Login />
        case 'home':  
          return <Homepage />;
        case 'dashboard':
          return <Dashboard />;
        case 'report':
          return <Realmissing />;
        case 'instructor':
          return <Instructor />;
        case 'Faqs':
          return <Bars />;
        default:
          return '';
      }
    };

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

          const Realmissing = () => {
            return(
                <div className="container">
            

            <div className="flexbox">
            <nav className="nav">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={50} width={200} />
            <div className="navlinks">
            <div className="user">
                    <FaUser color='white' />
                 </div>
                <ul>
                    {navlinks.map(link => (<li key={link.id}
                    onClick={(e) => { e.preventDefault(); setCurrentPage(link.reference); }}
                    ><a href={link.reference}>{link.link}</a></li>))}
                   
                </ul>
            </div>
            </nav>

                        {/* why you want to change your grade */}

           <div className="formdiv">

           <nav className="navv">
            <img src="src\assets\CSLOGO.jpg" alt="Example" height={40} width={160} />
            <div className="navlinkx">
                <ul>
                    {navlinks.map(link => (<li key={link.id}
                    onClick={(e) => { e.preventDefault(); setCurrentPage(link.reference); }}
                    ><a href={link.reference}>{link.link}</a></li>))}
                </ul>
            </div>
            </nav>

                         
           <form action="">
           { dropdown  &&  <Alert /> }

            <h1>Missing Grade</h1>
            <select name="" className='selectt'>
               <option value="">Choose course</option>
               {
                navlinks.map((item) => (
                    <option key={item.id}>{item.course}</option>
                ))
               }
            </select>

            <select name="" className='selectt'>
               <option value="">Lecturer</option>
               {
                navlinks.map((item) => (
                    <option key={item.id}>{item.lecturer}</option>
                ))
               }
            </select>
            <input type='text'placeholder='Expected grade'/>
            
            <textarea name="" id="" cols="30" rows="5" placeholder='Why the change ?'>

            </textarea>

            <button onClick={handleAlert}>Submit</button>
           </form>

           {/* end on form  */}
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