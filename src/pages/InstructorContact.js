import React, { useState } from 'react';
import './InstructorContact.css';

function InstructorContact() {
  const [following, setFollowing] = useState({
    'Emily Johnson': false,
    'Daniel Rodriguez': false,
    'Mark Atta Mensah': false,
    'Mrs. Welbeck': false,
    'Prof. Sehba': false,
    'Dr. Richard Minkah': false,
  });

  const handleFollow = (instructorName) => {
    alert(`You have started following ${instructorName}`);
    setFollowing((prevFollowing) => ({
      ...prevFollowing,
      [instructorName]: true,
    }));
  };

  return (
    <div>
      <br></br>
      <h1 className='InstText'>Instructors and Contacts</h1>
      <br></br>
      <br></br>
      <div className="card-row">
        {/* Card 1 */}
        <div className="card-container">
          <span className="pro">1</span>
          <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Emily Johnson</h3>
          <h6>GHANA</h6>
          <p>User interface designer and <br/> Dr. in Academics</p>
          <div className="buttons">
            <button className="primary">Send Email</button>
            <button
              className={following['Emily Johnson'] ? 'primary ghost following' : 'primary ghost'}
              onClick={() => handleFollow('Emily Johnson')}
            >
              {following['Emily Johnson'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card2-container2">
          <span className="pro2">2</span>
          <img className="round2" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Daniel Rodriguez</h3>
          <h6>GHANA</h6>
          <p>User interface designer and <br/> front-end developer</p>
          <div className="buttons2">
            <button className="primary2">Send Email</button>
            <button
              className={following['Daniel Rodriguez'] ? 'primary2 ghost2 following' : 'primary2 ghost2'}
              onClick={() => handleFollow('Daniel Rodriguez')}
            >
              {following['Daniel Rodriguez'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills2">
            <h6>Skills</h6>
            <ul>
              <li>AJAX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card3-container3">
          <span className="pro3">3</span>
          <img className="round3" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Mark Atta Mensah</h3>
          <h6>GHANA</h6>
          <p>User interface designer and <br/> full stack developer</p>
          <div className="buttons3">
            <button className="primary3">Send Email</button>
            <button
              className={following['Mark Atta Mensah'] ? 'primary3 ghost3 following' : 'primary3 ghost3'}
              onClick={() => handleFollow('Mark Atta Mensah')}
            >
              {following['Mark Atta Mensah'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills3">
            <h6>Skills</h6>
            <ul>
              <li>Software Engineering</li>
              <li>Full Stack Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='card-row'>
        {/* Card 4 */}
        <div className="card4-container4">
          <span className="pro4">4</span>
          <img className="round4" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Mrs. Welbeck</h3>
          <h6>GHANA</h6>
          <p>User interface designer and <br/> front-end developer</p>
          <div className="buttons4">
            <button className="primary4">Send Email</button>
            <button
              className={following['Mrs. Welbeck'] ? 'primary4 ghost4 following' : 'primary4 ghost4'}
              onClick={() => handleFollow('Mrs. Welbeck')}
            >
              {following['Mrs. Welbeck'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills4">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card5-container5">
          <span className="pro5">5</span>
          <img className="round5" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Prof. Sehba</h3>
          <h6>GHANA</h6>
          <p>Mathematician<br></br>and Professor</p>
          <div className="buttons5">
            <button className="primary5">Send Email</button>
            <button
              className={following['Prof. Sehba'] ? 'primary5 ghost5 following' : 'primary5 ghost5'}
              onClick={() => handleFollow('Prof. Sehba')}
            >
              {following['Prof. Sehba'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills5">
            <h6>Skills</h6>
            <ul>
              <li>Mathematics</li>
              <li>Front End Development</li>
              <li>Lecturer</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        {/* Card 6 */}
        <div className="card6-container6">
          <span className="pro6">6</span>
          <img className="round6" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
          <h3>Dr. Richard Minkah</h3>
          <h6>GHANA</h6>
          <p>Statistician and <br/> front end developer</p>
          <div className="buttons6">
            <button className="primary6">Send Email</button>
            <button
              className={following['Dr. Richard Minkah'] ? 'primary6 ghost6 following' : 'primary6 ghost6'}
              onClick={() => handleFollow('Dr. Richard Minkah')}
            >
              {following['Dr. Richard Minkah'] ? 'Following' : 'Follow'}
            </button>
          </div>
          <div className="skills6">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>Lecturer</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default InstructorContact;
