import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white shadow">
        <nav className="container flex items-center justify-between py-4 mx-auto">
          <a href="/" className="text-2xl font-bold text-gray-800">My Dashboard</a>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Logout
          </button>
        </nav>
      </header>
      <main className="container py-12 mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Dashboard!</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Analytics</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique rhoncus sem, nec varius ex sodales vitae.
            </p>
            <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              View Analytics
            </button>
          </div>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Tasks</h2>
            <p className="text-gray-700">
              Ut bibendum, ligula sed cursus congue, massa justo facilisis diam, eu lobortis nisl lacus quis magna.
            </p>
            <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Manage Tasks
            </button>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-white bg-gray-800">
        <p>&copy; 2022 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;