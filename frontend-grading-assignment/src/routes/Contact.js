import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer/Footer";
import Instructors from "../components/Instructors/Instructors";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-abt"
        heroImg={AboutImg}
        title="Instructors"
        url="/"
        btnClass="hide"
      />
      <Instructors />
      <Footer />
    </>
  );
}

export default Contact;
