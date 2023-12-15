import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 via-green-300 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32 text-center text-black">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
           GradeBridge
        </h1>
        <p className="mt-6 text-lg leading-8">

        Grade Bridge is a one stop solution that combines the concepts of grade tracking and a user-friendly interface. It suggests a seamless connection between students, instructors, and academic administration, making it easy for users to navigate and manage their grades. The name reflects the program's purpose of creating a bridge between different systems and platforms, allowing for a smooth and efficient experience for users.

        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
