import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer/Footer";
import Team from "../components/Instructors/Tutors";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-abt"
        heroImg={AboutImg}
        title="Instructors"
        url="/"
        btnClass="hide "
      />
      <Team />
      <Footer />
    </>
  );
}

export default Contact;
