import React from 'react';

function CustomFooter() {
  return (
    <div className='CustomFooter'>
    <footer >
      <p>&copy;{new Date().getFullYear()} UNIVERSITY OF GHANA GRADE REPORT SYSTEM</p>
    </footer>
    <hr/>
    </div>
  );
}

export default CustomFooter;