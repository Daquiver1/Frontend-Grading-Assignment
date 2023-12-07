import React, { useEffect } from 'react';
import './helpSupport.css'

const HelpSupport = () => {
  useEffect(() => {
    document.title = 'Help & Support';
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  )
}

export default HelpSupport
