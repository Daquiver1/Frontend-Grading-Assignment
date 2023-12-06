import Header from "../Components/Header.js";
import SideNav from "../Components/SideNav.js";
import Overview from "../Components/Overview.js";
import Footer from "../Components/Footer";



const LandingPage = () => {
  return (
    <div className="landing-page">
       <Header />
       <SideNav />
       <Overview />
       <Footer />
    </div>
  );
};

export default LandingPage;
