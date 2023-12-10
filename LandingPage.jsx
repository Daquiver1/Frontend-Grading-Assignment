import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const LandingPage = () => {
  // Dummy overview data for the system
  const systemOverview = {
    description: "Welcome to the Missing Grade Reporting System. This platform allows students to track their grades, report missing grades, and communicate with instructors or administration regarding academic profiles.",
    features: [
      "View current grades",
      "Report missing grades",
      "Communicate with instructors",
      "User-friendly interface"
    ],
    benefits: [
      "Improved grade tracking",
      "Efficient reporting of missing grades",
      "Enhanced communication with faculty"
    ]
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
  })

  return (
    <div>
      <Navbar />
      <div className="container pt-[100px] h-screen mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Missing Grade Reporting System</h1>

        {/* System Overview */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">System Overview</h2>
            <p className="mb-4">{systemOverview.description}</p>

            {/* Features */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                {systemOverview.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-bold mb-2">Benefits:</h3>
              <ul className="list-disc list-inside">
                {systemOverview.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=' -mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
