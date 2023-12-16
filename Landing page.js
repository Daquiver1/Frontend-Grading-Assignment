import React from "react";

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Missing Grade Reporting System</h1>
      </header>

      <main>
        <section className="hero">
          <h2>Track and report missing grades</h2>
          <p>Ensure your academic record is accurate and up-to-date with our easy-to-use system.</p>
          <a href="/login" className="btn">Sign Up</a>
          <a href="/learn-more" className="btn">Learn More</a>
        </section>

        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Track your current grades and identify missing ones.</li>
            <li>Report missing grades directly to your instructors or administration.</li>
            <li>Communicate with instructors to resolve grade discrepancies.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
