import React from 'react';
import { contactConfig1, contactConfig2, contactConfig3 } from '../ContactConfig';
import mam from '../images/mam.jpeg';
import soli from '../images/soli.jpeg';

const InstructorContactPage = () => {
  return (
    <div className=" bg-white">
      <div className="my-7 mt-0">
   <h1 className="mb-5 text-5xl font-bold text-gray-700 dark:text-[#788480] group-hover:text-white bg-black py-3 px-6  text-center transition-colors duration-300 hover:text-white cursor-pointer ">Contact The Instructors</h1>
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">

  <img src= {mam} alt="Mark Attah" className="mt-4 ml-3 rounded-md"  width={300}  height={200}  />


  <h3 className="text-xl ml-3 font-semibold pb-4">Mark Attah Mensah</h3>
  <address className='ml-3'>
    <strong>Email:</strong>{' '}
    <a href={`mailto:${contactConfig1.YOUR_EMAIL}`}>{contactConfig1.LECTURE_EMAIL}</a>
    <br />
    <br />
    {contactConfig1.hasOwnProperty('LECTURE_FONE') && (
      <p>
        <strong>Phone:</strong> {contactConfig1.LECTURE_FONE}
      </p>
    )}
  </address>
  <p className='ml-3'>{contactConfig1.description}</p>

</div>

          <div className="lg:w-7/12 flex items-center">
             <form className="mr-12 -mt-20 ontact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Enter Your Message"
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
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">
              <img src= {soli} alt="Micheal Soli" className="mt-4 ml-3 rounded-md"  width={300}  height={200}  />
            <h3 className="text-xl ml-3 font-semibold pb-4">Micheal Agbo Tetteh Soli</h3>
            <address className='ml-3'>
              <strong >Email:</strong>{' '}
              <a href={`mailto:${contactConfig2.LECTURE_EMAIL}`}>{contactConfig2.LECTURE_EMAIL}</a>
              <br />
              <br />
              {contactConfig2.hasOwnProperty('LECTURE_FONE') && (
                <p>
                  <strong>Phone:</strong> {contactConfig2.LECTURE_FONE}
                </p>
              )}
            </address>
            <p className='ml-3'>{contactConfig2.description}</p>
          </div>
          <div className="lg:w-7/12 flex items-center">
             <form className="mr-12 -mt-20 ontact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Enter Your Message"
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
        <hr className="border-t-2 border-gray-400 my-4 ml-0" />
      </div>
      <div className="space-y-5">
        <div className="lg:flex mb-5">
          <div className="lg:w-5/12 mb-5">
              <img src= {mam} alt="Mark Attah" className="mt-4 ml-3 rounded-md"  width={300}  height={200}  />
            <h3 className="text-xl ml-3 font-semibold pb-4">Get in touch</h3>
            <address className='ml-3'>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactConfig3.LECTURE_EMAIL}`}>{contactConfig3.LECTURE_EMAIL}</a>
              <br />
              <br />
              {contactConfig3.hasOwnProperty('LECTURE_FONE') && (
                <p>
                  <strong>Phone:</strong> {contactConfig3.LECTURE_FONE}
                </p>
              )}
            </address>
            <p className='ml-3'>{contactConfig3.description}</p>
          </div>
         <div className="lg:w-7/12 flex items-center">
             <form className="mr-12 -mt-20 ontact__form w-full">
              <div className="flex mb-5">
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 mr-2"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  required
                />
                <input
                  className="border border-gray-400 p-2 rounded-md w-1/2 ml-2"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="border border-gray-400 p-2 rounded-md w-full h-32"
                id="message"
                name="message"
                placeholder="Enter Your Message"
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
