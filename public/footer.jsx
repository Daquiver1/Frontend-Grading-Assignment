// App.js

import React from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      {/* Your main application content goes here */}
      <h1>Grade Issue Reporting App</h1>
      <p>Report grade issues easily with our app.</p>

      {/* Include the Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
