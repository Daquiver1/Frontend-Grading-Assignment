import { FaCaretDown, FaPrint, FaWrench } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dashboard } from '../Components/Dashboard';
import { Report } from '../Components/GradeReport';
import { Instructor } from '../Components/Instructor';
import { Login } from '../Components/Login';
import { MissingGrade } from '../Components/Missinggrade';
import '../Pagestyles/Faqs.css';
import '../Pagestyles/Footer.css';
import '../Pagestyles/Homepage.css';
import { Footer } from './Footer';
import { Homepage } from './Homepage';

export const Bars = () => {
  const[dropdown , setdropdown] = useState(false);
  const navlinks = [
    { reference: 'home', id: 6, link: 'Home' },
    { reference: 'login', id: 1, link: 'login' },
    { reference: 'dashboard', id: 2, link: 'Dashboard' },
    { reference: 'report', id: 3, link: 'Grade report' },
    { reference: 'report', id: 4, link: 'Report' },
    { reference: 'instructor', id: 5, link: 'Instructor' },
    { reference: 'Faqs', id: 6, link: 'Help and support' },
    
    
  ];
  
      const faqs = [
        {reference:1, faq:'My user ID/PIN does not work. I do not know my PIN/Password. What do I do?'},
        {reference:2, faq:'How do I submit grades for students when access to my computer has been disabled due to power outages, interrupted internet service, etc.?'},
        {reference:3, faq:"In Banner, ZFAGRAD isn't opening for me to enter my grades. What should I do?"},
        
      ]

      const faqs1 = [
        {reference:1 , faq:'May I enter a “W” for students who have withdrawn and an “AU” for students who have changed to an audit status?'},
        {reference:2 , faq:'How do I submit grades for students when access to my computer has been disabled due to power outages, interrupted internet service, etc.?'},
        {reference:3 , faq:'How do I know when grades have been rolled?'},
        {reference:4 , faq:'How do I administer an “F” or “U” as a final grade?'},
        {reference:5 , faq:'May I enter a “W” for students who have withdrawn and an “AU” for students who have changed to an audit status?'},
        {reference:6 , faq:'Why can’t I enter grades for courses that have been assigned to me? Why can’t I enter my grades and/or those for a course which was re-assigned to me from another instructor?'},
        {reference:7 , faq:'I submitted a grade change to the Office of Records and Registration a few weeks ago, but the change is not reflected on my roster. Why?'},
        {reference:8 , faq:'I entered grades for the graduating and non-graduating students yesterday. I want to change a grade for one of the non-graduating students and can’t. What is the problem? The deadline for entering grades for non-graduating students is not for a few days.'},
        {reference:9 , faq:'How do I submit a grade change?'},

        
      ]
      const faqs2 = [
        {reference:1 , faq:'How soon will my students be able to view their grades?'},
        {reference:2 , faq:'How soon will my students be able to view their grades?'},
        {reference:3 , faq:'How soon will my students be able to view their grades?'},
      ]
      const [currentpage, setCurrentPage] = useState('Faqs');
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
        return <Instructor />;
      case 'Faqs':
        return <RealBar />;
        case 'login':
          return <Login />
      default:
        return '';
    }
  };
     const Alert = () => {
      return(
        <div className='alertboxx'>
        <p>Instruction are being worked on.check out after some time!!</p>
      </div>
      )
     }
    //  const handleAlert = () =>{
    //  setTimeout(()=>setdropdown(!dropdown), 0)

    
    // }
    const handleAlert = (event) => {
      event.preventDefault();
      setdropdown(!dropdown)
      setTimeout(() => {
        const alertContainer = document.querySelector(".alertboxx");
          alertContainer.style.display = "none";
      }, 2000);
    };

    const RealBar = () => {
      return(

        <div className="faq">
      <div className="firstBar">
        <div className="uglogo">
          <img src="src\assets\CSLOGO.jpg" alt="Example" height={30} width={150} />
          <p>University of Ghana</p>
        </div>
      { dropdown  ?  <Alert /> : ''}
      </div>

      <div className="secondBar">
        <h1>Track, Report and Manage your grades</h1>
        <input type="search" placeholder="search.." />
      </div>

      <div className="flexColumn">
        <div className="flexRow">
          <ul>
            {navlinks.map((navitem) => (
              <li className="navlinks" key={navitem.id}>
               <a href={navitem.reference} onClick={(e) => { e.preventDefault(); setCurrentPage(navitem.reference); }}>{navitem.link}</a>
                <FaCaretDown />
              </li>
            ))}
          </ul>
        </div>
      </div>

     <div className='afterhead'>
     <div className='imdlink'>
     <a href="/login">Student success advising</a> |
      <a href="/">Home</a>
      </div>

    <div className='h3'><h3>Frequency Asked questions:Home</h3></div>
    <div className='report'>
      <a href="#">Report a broken link <FaWrench color='#8c1515' /></a>
      <a href="#">Print page <FaPrint color='#8c1515' /></a>
    </div>
    
    <div className='LRform'>
      <section className='L'>
      <h3>Home</h3>
      <a href="#"> Id would like information about...</a>
      <div className="lLinks">
        <li>Academic</li>
        <hr />
        <li>Faculty</li>
        <hr />
        <li>Grades</li>
        <hr />
        <li>Registration</li>

      </div>
      </section>
      <section className='R'>
        <div className='innerDiv'>
          
          <p>Id like information about..</p><br />
          <input type='text' placeholder='search for commonly asked questions'/>
           </div>
           <img src="src\assets\quickanswers copy.png" alt="" height={40} width={150}  />
      </section>
    </div>
     </div>
              <div className='faqqs'>
                <h3>PIN/Password Issues, Web Access and Technical Assistance</h3>
                <ul>
                {faqs.map((item) => (
                    <li key={item.id}><a href="">{item.faq}</a>
                    <button onClick={handleAlert}>+</button>
                    </li>
                  ))}
                </ul>
              </div>


              <div className='faqqs'>
                <h3>PIN/Password Issues, Web Access and Technical Assistance</h3>
                <ul>
                  {faqs1.map((item) => (
                    <li key={item.id}><a href="">{item.faq}</a>
                    <button onClick={handleAlert}>+</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='faqqs'>
                <h3>PIN/Password Issues, Web Access and Technical Assistance</h3>
                <ul>
                  {faqs2.map((item) => (
                    <li key={item.id}><a href="">{item.faq}</a>
                    <button onClick={handleAlert}>+</button>
                    </li>
                  ))}
                </ul>
              </div>
              <Footer />
    </div>
      )
    }
      
  return (
    <>
    {renderComponent()}
    </>
  );
};
