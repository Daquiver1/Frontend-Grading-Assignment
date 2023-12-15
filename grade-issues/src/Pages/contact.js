import React, { useState } from 'react';
import Footer from './Footer';

const instructorsData = [
  { id: 1, name: 'Dr. endurance Offeibea', email: 'Dr. enduranceoffeibea@gmail.com' },
  { id: 2, name: 'Dr. solomondanso', email: 'Dr. solomondanso@gmailcom' },
  {id: 3, name: " Dr. eugeneOffei ", email: 'Dr. eugeneOffei@gmail.com'},
  
];

const Contact= () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):\n${emailContent}`);
    } else {
      alert('Please select an instructor before sending an email.');
    }
  };

  return (
    <div className="container mx-auto mt-8 contact">
      <h2 className="text-2xl font-semibold mb-4">Instructor Contact Page</h2>

      <div className="flex item-center justify-between">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">List of Instructors</h3>
          <ol className="list-disc pl-4">
            {instructorsData.map((instructor) => (
              <ol
                key={instructor.id}
                className={`cursor-pointer ${
                  selectedInstructor && selectedInstructor.id === instructor.id ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedInstructor(instructor)}
              >
                {instructor.name}
              </ol>
            ))}
          </ol>
        </div>

        
        <div className='w-1/2'> 
          <h3 className="text-xl font-semibold">Send Email</h3>
          {selectedInstructor ? (
            <>
              <p>Contacting: {selectedInstructor.name}</p>
              <p>Email: {selectedInstructor.email}</p>
                <section className="w-full">
                  <div className="py-8 lg:py-16 px-4 ">
                      <form action="#" className="space-y-8">
                          <div>
                              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                          </div>
                          <div className="sm:col-span-2">
                              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                          </div>
                          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                      </form>
                  </div>
                </section>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSendEmail}
              >
                Send Email
              </button>
            </>
          ):(
            <p>Select an instructor to see contact details and send an email.</p>
          )}
        </div>
      </div>
      <Footer className= ""></Footer>
    </div>
  );
};

export default Contact;
