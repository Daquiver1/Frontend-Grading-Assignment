import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import AboutImg from "../assets/6.jpg";
import Footer from "../components/Footer/Footer";
import Grades from "../components/Grades/Grades";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-abt"
        heroImg={AboutImg}
        title="Grades"
        url="/"
        btnClass="hide"
      />
      <Grades />
      <Footer />
    </>
  );
}

export default About;
