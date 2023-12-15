import PropTypes from 'prop-types';
import NavBar from './NavBar'; 
import Footer from './footer'; 


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
     <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

