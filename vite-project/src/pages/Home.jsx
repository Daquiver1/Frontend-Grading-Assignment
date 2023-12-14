import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import illustration1 from '../assets/images/illustration1.webp';
import illustration2 from '../assets/images/illustration2.png';
import illustration3 from '../assets/images/illustration3.jpg';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Missing Grade Reporting System
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Track, report, and communicate about missing grades easily!
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-blue-500 py-2 px-4 rounded-full text-lg md:text-xl inline-flex items-center"
          >
            Get Started <BsArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center mb-8">
              <img src={illustration1} alt="Feature Icon" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-bold mb-2">View Your Grades</h2>
              <p className="text-gray-700 text-center">
                Easily view all your recorded grades in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center mb-8">
              <img src={illustration2} alt="Feature Icon" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-bold mb-2">Report Missing Grades</h2>
              <p className="text-gray-700 text-center">
                Report any missing grades and keep track of your academic progress.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center mb-8">
              <img src={illustration3} alt="Feature Icon" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-bold mb-2">Communicate with Instructors</h2>
              <p className="text-gray-700 text-center">
                Easily communicate with your instructors regarding missing grades.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Ready to get started with the Missing Grade Reporting System?
          </h2>
          <Link
            to="/dashboard"
            className="bg-white text-blue-900 py-2 px-4 rounded-full text-lg md:text-xl inline-flex items-center"
          >
            Get Started <BsArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
