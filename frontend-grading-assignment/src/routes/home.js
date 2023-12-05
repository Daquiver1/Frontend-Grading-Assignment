import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import Trip from "../components/Trip";
import Destination from "../components/destination";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Academic Adventure Awaits:"
        text=" Dive into Your Dashboard Now"
        btnText="Dashboard"
        url="/Dashboard"
        btnClass="show"
      />
      <Destination />

      <Footer />
    </>
  );
}

export default Home;
