
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <header className="text-center py-5">
        <div className="container  text-center">
          <h1>Missing Grade Reporting System</h1>
          <p className="lead">
            This system helps students track and report missing grades in their academic profiles.
          </p>
        </div>
      </header>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <h2>Features</h2>
            <ul className="list-group">
              <li className="list-group-item">View your grades</li>
              <li className="list-group-item">Report missing grades</li>
              <li className="list-group-item">Communicate with instructors</li>
              <li className="list-group-item">User-friendly interface</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2>About</h2>
            <p>
              The Missing Grade Reporting System is designed to provide students with an interactive and user-friendly interface. Its goal is to streamline the process of tracking and reporting missing grades not recorded in their academic profiles. Students can easily view their grades, report discrepancies, and communicate with instructors or academic administration.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Missing Grade Reporting System</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
