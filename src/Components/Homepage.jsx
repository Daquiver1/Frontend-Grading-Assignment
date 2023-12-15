import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Dashboard } from '../Components/Dashboard';
import { Login } from '../Components/Login';
import { MissingGrade } from '../Components/Missinggrade';
import '../Pagestyles/Footer.css';
import '../Pagestyles/Homepage.css';
import { Bars } from './Bars';
import { Directives } from './Directives';
import { Footer } from './Footer';
import { Report } from './GradeReport';
import { Instructor } from './Instructor';
import { Leftpanel } from './Leftpanel';


export const Homepage = () => {
  const navlinks = [
    {reference:'home', id: 7, link: 'Home' },
    {reference:'login', id: 1, link: 'login' },
    {reference:'dashboard', id: 2, link: 'Dashboard' },
    {reference:'current', id: 3, link: 'Current grades' },
    {reference:'report', id: 4, link: 'Report' },
    {reference:'instructor', id: 5, link: 'Instructor' },
    {reference:'faqs', id: 6, link: 'Help and support' }
    
  ];

  const [currentpage, setCurrentPage] = useState('home');
        const renderComponent = () => {
          switch (currentpage) {
            case 'home':  
              return <Realhome />;
              case 'current':
                return <Report />
            case 'dashboard':
              return <Dashboard />;
            case 'report':
              return <MissingGrade />;
            case 'instructor':
              return <Instructor />;
            case 'faqs':
              return <Bars />;
              case 'login':
                return <Login />
            default:
              return '';
          }
        };


  const Realhome = () => {
    return(
      <main className="main">
      {/* FIRST BAR */} 
     <div className="container">
     <div className='bars'>
     <div className='firstBar'>
        <div className='uglogo'>
          <img src='src\assets\CSLOGO.jpg' alt="Example" height={30} width={150} />
          <p>University of Ghana</p>
        </div>
      </div>

      {/* second bar */}

      <div className='secondBar'>
        <h1>Track, Report and Manage your grades</h1>
        <input type='search' placeholder='search..' />
      </div>
      

      {/* main nav */}
      <div className='flexColumn'>
        <div className='flexRow'>
          <ul>
            {navlinks.map((navitem) => (
              <li className='navlinks' key={navitem.id} onClick={(e) => { e.preventDefault(); setCurrentPage(navitem.reference); }}>
                <a href={`#${navitem.link}`}>{navitem.link}</a>
                <FaCaretDown />
              </li>
            ))}
          </ul>
        </div>
       
      </div>
     </div>
                {/*     PURPOSE PURPOSE PURPOSE */}
      <div className='purpose'>
        <Leftpanel />
        
        <div className='rightpanel'>
        <div className='img'><img src="src\assets\pencil.jpg" alt="" width={800} height={200}/></div>
           <Directives />
        </div>
      </div>
      <Footer />
     </div>
    </main>

    )
      }
  
  return (
    <>
    {renderComponent()}
    </>
  )
}
