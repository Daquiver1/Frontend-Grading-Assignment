import FAQanswers from "@/components/FAQanswers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import Dropdown from "@/components/dropdown";
import React from "react";
import Image from "next/image";
import faqImg from "../../public/Faq.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <PageTitle pagename={"FAQ"} />
      <div className="flex justify-center m-15 ">
        <Dropdown />
      </div>
      <Image src={faqImg} />
      <FAQanswers />
      <Footer />
    </>
  );
};

export default About;
