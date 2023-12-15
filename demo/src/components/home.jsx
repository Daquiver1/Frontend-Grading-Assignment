import React from 'react';
import { Container } from 'react-bootstrap';
import { Person, Book, GraphUp } from 'react-bootstrap-icons';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Welcome to the Grade Reporting System</h1>
          <p>
            This system allows you to view and manage student grades, providing
            insights into academic performance.
          </p>
        </Container>

        <Container>
          <div className="features">
            <div className="feature">
              <Person size={64} />
              <h3>Student Profiles</h3>
              <p>Access detailed information about individual students.</p>
            </div>

            <div className="feature">
              <Book size={64} />
              <h3>Course Management</h3>
              <p>View and update course information, assignments, and grades.</p>
            </div>

            <div className="feature">
              <GraphUp size={64} />
              <h3>Analytics</h3>
              <p>Utilize analytics to track and analyze overall academic performance.</p>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default Home;
