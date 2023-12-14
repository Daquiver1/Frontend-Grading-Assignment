import React from 'react';
import Navbar from './Navbar';

const Landingpage =() => {
  
return(
  < >
  <Navbar />
<div>
<h1>WELCOME</h1>
<p>Welcome to the Missing Grade Reporting System</p>
</div>
<div className='login'>
<button a href='./Login'>Login</button>
</div>
</>
);
};

export default Landingpage;