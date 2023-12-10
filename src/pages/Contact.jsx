import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Contact = () => {
  // Dummy data for instructors and their contact details
  const instructors = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
    // Add more instructors as needed
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Simulate sending email
    setEmailSent(true);
    // Reset email content and selected instructor
    setEmailContent('');
    setSelectedInstructor(null);
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
      <div className="container  h-screen pt-[100px] mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Instructor Contact</h1>

        {/* List of instructors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-4 cursor-pointer ${selectedInstructor === index ? 'border border-[#294671]' : ''
                }`}
              onClick={() => { setSelectedInstructor(index); setEmailSent(false); }}
            >
              <h2 className="text-xl font-semibold mb-2">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <p>Phone: {instructor.phone}</p>
            </div>
          ))}
        </div>

        {/* Email form */}
        {selectedInstructor !== null && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Send Email</h2>
            {emailSent ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Email Sent!</strong>
                <span className="block sm:inline">Your message has been sent to the instructor.</span>
              </div>
            ) : (
              <form onSubmit={handleSendEmail}>
                <textarea
                  className=" resize-none w-full h-24 border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-[#294671]"
                  placeholder="Write your message..."
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  required
                ></textarea>
                <button onClick={() => setEmailSent(true)} type="submit" className="bg-[#294671] text-white px-4 py-2 rounded hover:bg-[#4A6387]">
                  Send Email
                </button>
              </form>
            )}
          </div>
        )
        }
      </div>

      <div className=' -mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
