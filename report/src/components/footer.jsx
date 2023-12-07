import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2022 Corporate. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><Link to="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Link></li>
          <li><Link to="https://www.twitter.com"><i className="fab fa-twitter"></i></Link></li>
          <li><Link to="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></Link></li>
        </ul>
      </div>
      {showTopBtn && (
        <div className="go-top" onClick={goTop}></div>
      )}
    </Container>
  );
}

export default AppFooter;