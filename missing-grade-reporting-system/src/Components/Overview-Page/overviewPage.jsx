import React, { useEffect } from 'react';
import './overviewPage.css';

const Overview = () => {
  useEffect(() => {
    document.title = 'Overview';
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default Overview;
