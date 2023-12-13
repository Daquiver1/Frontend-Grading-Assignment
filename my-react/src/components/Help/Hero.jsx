import React from "react";
import Accordion from "./Accordion";

const Hero = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="How do I get started with UGGT?"
        answer="Getting started is a breeze! Simply sign up for an account using your email or preferred social media credentials. Once registered, you can access your grades and search for any missing grade. Our intuitive interface makes it easy to navigate and customize according to your academic needs. Always use your ID as Username and your Pin as Password"
      />
      <Accordion
        title= "Is my data secure on UGGT?"
        answer="Your privacy and data security are our top priorities. We employ robust encryption protocols to ensure the confidentiality of your information. Rest assured, your academic data is stored securely and accessible only to you."
      />
      <Accordion
        title="How does UGGT calculate my overall grade?"
        answer=" UGGT uses customizable grading scales that you can set according to your institution's standards. The platform calculates your overall grade based on the weights assigned to each assignment, exam, or project. "
      />
      <Accordion
        title=" I forgot my password. How can I reset it?"
        answer="No worries! Simply click on the Forgot Password link on the login page. Follow the instructions sent to your registered email address to reset your password securely."
      />
      <Accordion
        title="Can I use UGGT on my mobile device?"
        answer=" Yes, UGGT is optimized for mobile use. You can access your account and track your grades on the go, making it convenient for students with busy schedules."
      />
      <Accordion
        title="How can I contact customer support?"
        answer="For any additional assistance or queries, feel free to reach out to our customer support team through the Contact Us page. We are here to help and ensure you have a smooth experience with UGGT."
      />
      <Accordion
        title="Are there any tutorial resources available?"
        answer="Certainly! Explore our tutorial section, where you can find step-by-step guides and video tutorials to maximize your experience with UGGT. Learn tips and tricks to make the most out of our grade tracking features."
      />
      
    </div>
 
  );
};

export default Hero;
