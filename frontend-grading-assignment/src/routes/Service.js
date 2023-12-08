import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import AboutImg from "../assets/9.jpg";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/MissingGradeForm/ContactForm";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-abt"
        heroImg={AboutImg}
        title="Reports"
        url="/"
        btnClass="hide"
      />
      <ContactForm />

      <Footer />
    </>
  );
}

export default Service;
