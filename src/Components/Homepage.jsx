
import { FaCaretDown } from 'react-icons/fa';
import '../Pagestyles/Footer.css';
import '../Pagestyles/Homepage.css';
import { Directives } from './Directives';
import { Footer } from './Footer';
import { Leftpanel } from './Leftpanel';

export const Homepage = () => {
  const navlinks = [
    { id: 1, link: 'login' },
    { id: 2, link: 'Dashboard' },
    { id: 3, link: 'Grade report' },
    { id: 4, link: 'Report' },
    { id: 5, link: 'Instructor' },
    { id: 6, link: 'Help and support' }
  ];

  
  
  return (
    <main className="main">
      {/* FIRST BAR */}
      
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
              <li className='navlinks' key={navitem.id}>
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
        <hr />
        <div className='rightpanel'>
        <div className='img'><img src="src\assets\pencil.jpg" alt="" width={800} height={200}/></div>
           <Directives />
        </div>
      </div>
      <Footer />
    </main>
  )
}
