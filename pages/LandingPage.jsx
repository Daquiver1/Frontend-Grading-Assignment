import React from 'react';
import backgroundImage from '../images/im3.jpg';

function LandingPage() {
  return (
    <div>
      <section id="Page" className="relative h-screen bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
          <div className="relative z-10">
            <h1 className="font-bold text-5xl leading-tight tracking-tight antialiased">
              Welcome to the University of Ghana Grade report website.
            </h1>
            <p className="mt-4 font-semibold text-2xl max-w-md mx-auto leading-9 bg-gray-100">
              This platform allows students and staff of the University of Ghana to access their grade reports easily, without having to go through a long process of booking appointments with the academic office.
            </p>
            <p className="mt-4 font-semibold text-2xl max-w-md mx-auto leading-9">
              Click here to <a href="/login" className="px-6 py-4 mt-8 text-lg font-medium hover:to-teal-700">Login</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
