import React from 'react';
import  '../components/Home.css';
import home_backgroundImage from '../images/home_background.jpg';

function Home() {
  return (
    <html>
          <body className='home'>

            <div>
              <p className='schoolname'>
                UNIVERSITY OF GHANA
              </p>
            </div>

            <div>
                <p className='entrytext'>
                    MISSING STUDENT'S GRADE REPORT SYSTEM 
                </p>

                <p className='overview'>
                  Students of the University of Ghana may click the button below to access this system
                </p>


            </div>

            <div button-container>
                <button className='homebutton'>
                  CONTINUE
                </button>
            </div>


                




          </body>
         </html>
  )
}

export default Home;