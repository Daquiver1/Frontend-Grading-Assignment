import React from 'react';

function InstructorsContactPage() {
  const sendMockEmail = (instructorName, instructorEmail) => {
    // Simulated email sending functionality mockup as requested in assignment
    const confirmationMessage = document.getElementById('emailConfirmation');
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.textContent = `Your message has been sent to ${instructorName} (${instructorEmail})!`;
    setTimeout(() => {
      confirmationMessage.classList.add('hidden');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <header>
        <b className="text-2xl font-bold">CONTACT YOUR INSTRUCTORS HERE</b>
      </header>

      <main className="mt-8">
        <section className="instructor-contact-section bg-white rounded-md p-8">
          <h2 className="text-3xl font-bold mb-4">Instructor Contact</h2>

          <ul className="instructor-list">
            <li className="mb-8">
              <h3 className="text-2xl font-bold">Mr. Danquiver A.</h3>
              <p className="text-lg">Contact: +233 50 123 4567</p>
              <p className="text-lg">Email: danquivera@gmail.com</p>
              <button
                onClick={() => sendMockEmail('Mr. Danquiver A', 'danquivera@gmail.com')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
              >
                Send Email
              </button>
            </li>
            <li className="mb-8">
              <h3 className="text-2xl font-bold">Dr. Michael Soli</h3>
              <p className="text-lg">Contact: +233 55 987 6543</p>
              <p className="text-lg">Email: soliamichael@yahoo.com</p>
              <button
                onClick={() => sendMockEmail('Dr. Michael Soli', 'soliamichael@yahoo.com')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
              >
                Send Email
              </button>
            </li>
          </ul>

          <p id="emailConfirmation" className="hidden mt-4 text-green-600">
            Your message has been sent to the instructor!
          </p>
        </section>
      </main>

      <footer className="mt-8">
        <b className="text-xl">MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
}

export default InstructorsContactPage;