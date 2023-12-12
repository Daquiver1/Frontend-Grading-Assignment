import React from 'react'
import './InstructorContact.css';

function InstructorContact() {
  return (
    <div>
    <br></br><h1 className='InstText'>Instructors and Contacts</h1><br></br><br></br>
    <div className="card-container">
	<span className="pro">1</span>
	<img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Emily Johnson</h3>
	<h6>GHANA</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div className="buttons">
		<button className="primary">
			Send Email
		</button>
		<button className="primary ghost">
			Follow
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
<div className="card2-container2">
	<span className="pro2">1</span>
	<img className="round2" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Emily Johnson</h3>
	<h6>GHANA</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div className="buttons2">
		<button className="primary2">
			Send Email
		</button>
		<button className="primary2 ghost2">
			Follow
		</button>
	</div>
	<div className="skills2">
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
      <br></br></div>
  )
}

export default InstructorContact