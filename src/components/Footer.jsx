import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5 py-3 bg-dark text-light">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Missing Grade Reporting System</p>
        {/* Add any additional footer content here */}
      </div>
    </footer>
  );
}

export default Footer;
