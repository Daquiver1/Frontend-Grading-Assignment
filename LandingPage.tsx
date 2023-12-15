// LandingPage.tsx
import React from 'react';

interface LandingPageProps {
  // Add any necessary props
}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
      <h2>REPORT MISSING GRADES EASILY</h2>
        <img src="OIP1.jpg" alt="Missing Grade Hero Image" />
        <p>Quickly report and track missing grades to stay on top of your academic progress.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section id="features">
        <h2>Key Features</h2>
        <div className="feature">
          <img src="OIP2.jpg" alt="Feature Icon 1" />
          <p>Report missing grades with just a few clicks.</p>
        </div>
        <div className="feature">
          <img src="OIP3.jpg" alt="Feature Icon 2" />
          <p>Receive instant notifications on grade updates.</p>
        </div>
        <div className="feature">
          <img src="OIP4.jpg" alt="Feature Icon 3" />
          <p>Track your academic progress in real-time.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          1. Log in to your account <br />
          2. Report any missing grades using the intuitive interface <br />
          3. Receive notifications when the grades are updated
        </p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial">
          <p>"The missing grade system has made it so much easier to keep track of my academic performance."</p>
          <cite>Jane Doe, Student</cite>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta">
        <h2>Ready to Report Missing Grades?</h2>
        <p>Sign up now and take control of your academic journey.</p>
        <button>Sign Up</button>
      </section>

      {/* Footer Section */}
      <footer>
       
      </footer>
    </div>
  );
};

export default LandingPage;
