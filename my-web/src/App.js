import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/appmain';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
