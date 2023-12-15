import "./Home.css";
import Footer from "./components/Footer";
import img1 from "./images/images.png";

function Home() {
  return (
    <>
      <div>
        <img className="image" src={img1} alt="pic" />
      </div>

      <h1 className="text-center">Missing Grade Reporting System</h1>
      <div className="missing-grade-container">
        <h1>Welcome to the Missing Grade Report System</h1>
        <p>
          Your go-to platform for seamlessly managing your academic journey. Our
          user-friendly interface puts you in control, providing a hassle-free
          experience to view and report missing grades.
        </p>

        <section className="feature-section">
          <div className="feature">
            <h2>Discover Transparency</h2>
            <p>
              Explore the power of transparency in your academic records. Our
              system simplifies the process of tracking and reporting missing
              grades, ensuring accuracy and empowering you to stay informed
              about your performance.
            </p>
          </div>

          <div className="feature">
            <h2>Effortless Academic Insight</h2>
            <p>
              Navigate effortlessly to the View Grades section, where a single
              click allows you to access your current academic standing. With a
              clear and intuitive layout, you can review your grades across
              various courses with ease.
            </p>
          </div>

          <div className="feature">
            <h2>Proactive Reporting</h2>
            <p>
              Take charge of your academic records through our Report Missing
              Grades section. A simple and effective reporting mechanism guides
              you through the steps, enabling you to proactively address
              discrepancies and contribute to the accuracy of your academic
              profile.
            </p>
          </div>

          <div className="feature">
            <h2>Seamless Communication</h2>
            <p>
              Connect directly with instructors and academic administration
              through our Communication Section. Whether you need clarification
              on grades or wish to submit inquiries, our system ensures a
              seamless interaction process.
            </p>
          </div>
        </section>

        <p>
          Embark on a journey of empowerment with the Missing Grade Report
          System. By combining transparency, user-friendly features, and
          proactive reporting mechanisms, we strive to enhance your educational
          experience and put you in control of your academic success. Start
          exploring the possibilities today. 
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Home;

