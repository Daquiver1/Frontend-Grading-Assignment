import { useState } from "react";
import { questions } from "../components/FAQ/FAQData";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navigation/Navbar";
import FAQImg from "../assets/3.jpg";
import Footer from "../components/Footer/Footer";

import FAQ from "../components/FAQ/FAQ";

function HelpFAQs() {
  const [cards] = useState(questions);
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-abt"
        heroImg={FAQImg}
        title="Help and FAQs"
        url="/"
        btnClass="hide "
      />
      <section className=" max-w-xl mx-auto  py-20 px-4 ">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8">
          Frequently Asked Questions
        </h1>
        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <FAQ {...card} key={index} />
          ))}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default HelpFAQs;
