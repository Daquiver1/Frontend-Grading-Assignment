import Footer from "./ms-footer";
import Header from "./ms-header";
import "./src/home-styles.css";

function Home(){
  return(
    <div>
      <Header />
      <div className="home">
      <h1 className="welcome-text">Welcome to the Missing Grades Report Platform!</h1>
      <p>
        Empowering Students to Take Control of Their Academic Journey
      <br/>
        Have you encountered missing grades in your academic records?<br/> We're here to help you report and resolve those issues efficiently.
      <br/>
        Our platform is designed to streamline the process, making it easy for you<br/> to communicate with your instructors and administrators.
      <br/>
        Let's work together to ensure that your academic achievements are accurately reflected.<br/> Reporting missing grades has never been this simple!
      <br/>
        Get started by logging in or to access your personalized dashboard.
      </p>
    </div>
    <Footer />
    </div>
  );
}

export default Home;