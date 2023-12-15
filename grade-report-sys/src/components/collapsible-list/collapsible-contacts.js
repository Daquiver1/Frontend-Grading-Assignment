import React from 'react';
import './collapsible.css';
import Collapse from './collapse';
import EmailLink from '../email/emaillink';


const Collapsible = () => {
  return (
    <div>
        {<main className="collapsection">
  <div className="cssect">
  
  <div className="shortcp">
  <div>
    <button className="collapsible">CLICK TO REVEAL AVAILABLE INSTRUCTOR INFO</button>
<div className="content">
<ul>
<li>Ferdinand Katsriku -  <EmailLink email="fkatsriku@ug.edu.gh" /></li>
<li>Mark Atta Mensah - <EmailLink email="mamensah@ug.edu.gh" /></li>
<li>Dwumfour Abdullai Aziz - <EmailLink email=" adwumfour@ug.edu.gh " />/0260541219</li>
<li>Dr. S. Sarfo - <EmailLink email="sosarfo@ug.edu.gh" /></li>
<li>Dr. B.V. Normenyo - <EmailLink email="bvnormenyo@ug.edu.gh" /></li>
<li>Dr. C.P.N Ogbogbo - <EmailLink email="cpnogbogbo@ug.edu.gh" /></li>
<li>Dr. R.A. Twum - <EmailLink email="ratwum@staff.ug.edu.gh" /></li>
<li>Dr. D Adu-Gyamfi - <EmailLink email="dadu-gyam_@ug.edu.gh" /></li>
<li>Dr. A Asare-Tuah - <EmailLink email="aasare-tuah@ug.edu.gh" /></li>


</ul>

</div>
</div>
</div>


</div>



</main>
}
<Collapse className="collapsible" />
    </div>
  )
}

export default Collapsible;