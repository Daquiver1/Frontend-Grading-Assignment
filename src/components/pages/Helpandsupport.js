import React from 'react';
import Footer from './Footer';

function HelpAndSupport() {
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Help and Support</h1>
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-2">
            <div>
              <strong>Q:</strong> How can I view my grades?
              <br />
              <strong>A:</strong> You can view your grades on the Grade Report page.
            </div>
            <div>
              <strong>Q:</strong> Can I report a missing grade?
              <br />
              <strong>A:</strong> Yes, you can report a missing grade on the Missing Grade Form page.
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-2">Contact Technical Support</h2>
          <p className="mb-4">
            If you need further assistance or encounter technical issues, please fill out the
            contact form below.
          </p>
          <form className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border rounded-md resize-none"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HelpAndSupport;
