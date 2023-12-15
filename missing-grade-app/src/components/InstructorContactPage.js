import React from 'react';
import { contactConfig } from './ContactConfig';

const InstructorContactPage = () => {
  return (
    <div className="container mx-auto bg-white">
      <div className="my-5 mt-3">
        <h1 className="text-4xl mb-4">Contact The Instructors</h1>
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">
            <h3 className="text-xl font-semibold pb-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              <br />
              <br />
              {contactConfig.hasOwnProperty('YOUR_FONE') && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div className="lg:w-7/12 flex items-center">
            <form className="contact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <div className="mt-5">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-5 mt-3">
        <h1 className="text-4xl mb-4">Contact The Instructors</h1>
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">
            <h3 className="text-xl font-semibold pb-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              <br />
              <br />
              {contactConfig.hasOwnProperty('YOUR_FONE') && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div className="lg:w-7/12 flex items-center">
            <form className="contact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <div className="mt-5">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-5 mt-3">
        <h1 className="text-4xl mb-4">Contact The Instructors</h1>
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">
            <h3 className="text-xl font-semibold pb-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              <br />
              <br />
              {contactConfig.hasOwnProperty('YOUR_FONE') && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div className="lg:w-7/12 flex items-center">
            <form className="contact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <div className="mt-5">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default InstructorContactPage;
