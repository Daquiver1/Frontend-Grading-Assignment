import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 via-indigo-500 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          WELCOME TO GRADEGUARD
        </h1>
        <p className="mt-6 text-lg leading-8">
          Elevate your academic experience with GradeGuard. Whether you're a student on the path to academic excellence, an educator streamlining the grading process, or an institution committed to providing the best learning experience, GradeGuard is your ally. Join us and revolutionize the way you approach grades, making education a journey of growth and achievement.

Welcome to GradeGuard, where every grade tells a story, and every story leads to success!
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
