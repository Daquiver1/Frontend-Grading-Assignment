import React, { useState } from 'react';

const Contact = () => {
  const contacts = [
    { id: 1, name: 'Mr. Mark Attah Mensah', email: 'mark.atta@st.ug.edu' },
    { id: 2, name: 'Dr Appiah Ansong', email: 'a.ansong@st.ug.edu' },
    { id: 3, name: 'Dr. Michael Sorli', email: 'sorli.michael@st.ug.edu' },
    { id: 4, name: 'Prof. Abdullai Aziz', email: 'aziz.a@st.edu.gh' },
    { id: 5, name: 'Mr. Sarbla Adjei', email: 'sarblah@st.ug.edu' },
    // Add more contacts as needed
  ];

  const [selectedContact, setSelectedContact] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendEmail = () => {
    // Implement your email sending logic (this is just a mock-up)
    if (selectedContact && emailContent) {
      alert(`Simulated email sent to ${selectedContact.name}:\n\n${emailContent}`);
      // You may want to reset the form or close a modal after sending the email
      setSelectedContact(null);
      setEmailContent('');
    } else {
      alert('Please select a contact and enter email content.');
    }
  };

  return (
    <div className="bg-red-100 min-h-screen p-4">
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        {/* List of contacts with contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-blue-300 p-4 border rounded-md hover:shadow-md">
              <button
                onClick={() => handleContactSelect(contact)}
                className="text-cyan-050 hover:underline focus:outline-none font-semibold mb-2 block"
              >
                {contact.name}
              </button>
              <p className="text-gray-800">{contact.email}</p>
            </div>
          ))}
        </div>

        {/* Simulated email form */}
        {selectedContact && (
          <div className="mt-4">
            <p className="text-lg font-semibold mb-2">Send a simulated email to {selectedContact.name}</p>
            <textarea
              rows="4"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Enter your email content here..."
              className="w-full p-2 border rounded-md mb-2"
            />
            <button onClick={handleSendEmail} className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Send Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
