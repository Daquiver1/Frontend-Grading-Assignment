import React, { useState } from 'react';
import Footer from './Footer';


function Instructor() {
  // Sample data for instructors
  const instructors = [
    { id: 1, name: 'Dr. Mark Atta', email: 'mamensah@st.ug.edu.gh' },
    { id: 2, name: 'Dr. Nancy myles', email: 'nancymyles@st.ug.edu.gh' },
    { id: 3, name: 'Dr. Prince Bortey', email: 'pricebortey@st.ug.edu.gh' },
    { id: 1, name: 'Dr. Danquiver Osei', email: 'danquiverosei@st.ug.edu.gh' },
    { id: 2, name: 'Dr. Niamah Mensah ', email: 'niamahmensah@st.ug.edu.gh' },
    { id: 3, name: 'Dr. Lily Baffuor', email: 'lilybaffuor@st.ug.edu.gh' },
    // Add more instructors as needed
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Simulate sending an email (replace with actual email sending logic)
    if (selectedInstructor) {
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):
      Subject: ${emailSubject}
      Body: ${emailBody}`);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Instructor Contacts</h1>

      <section className="flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-bold mb-2">Instructors</h2>
          <ul className="list-disc pl-6">
            {instructors.map((instructor) => (
              <li key={instructor.id} className="cursor-pointer text-blue-500 hover:underline" onClick={() => handleInstructorClick(instructor)}>
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 pl-4">
          {selectedInstructor && (
            <>
              <h2 className="text-xl font-bold mb-2">Send Email</h2>
              <form onSubmit={handleSendEmail} className="bg-white p-4 rounded-md shadow-md">
                <p className="mb-4">Send an email to {selectedInstructor.name}:</p>
                <div className="mb-4">
                  <label htmlFor="emailSubject" className="block text-gray-700 text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="emailSubject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="emailBody" className="block text-gray-700 text-sm font-bold mb-2">
                    Body
                  </label>
                  <textarea
                    id="emailBody"
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
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
                    Send Email
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        
      </section>
    <Footer />
    </div>

  );
}

export default Instructor;
