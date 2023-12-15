import React from 'react';

function HelpSupportPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    showConfirmationMessage();
  };

  const showConfirmationMessage = () => {
    document.getElementById('contactConfirmation').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('contactConfirmation').classList.add('hidden');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <header>
        <b className="text-2xl font-bold">FAQS & TECHNICAL SUPPORT PAGE</b>
      </header>

      <main className="mt-8">
        <section className="help-support-section bg-white rounded-md p-8">
          <h2 className="text-3xl font-bold mb-4">Help & Support</h2>

          <div className="faq-section">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            <ul className="faq-list mt-4">
              <li className="mb-6">
                <h4 className="text-xl font-bold">How can I report a missing grade?</h4>
                <p className="text-lg">You can report a missing grade by navigating to the 'MISSING GRADE FORM' page and filling out the form with the necessary details.</p>
              </li>
              <li className="mb-6">
                <h4 className="text-xl font-bold">Where can I view my grades?</h4>
                <p className="text-lg">You can view your grades on the 'GRADE REPORT' page. It displays a detailed overview of all your course grades.</p>
              </li>
            </ul>
          </div>

          <div className="contact-form mt-8">
            <h3 className="text-2xl font-bold">Contact Technical Support</h3>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="form-group">
                <label htmlFor="fullName" className="text-lg">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required className="mt-1 p-2 border w-64 rounded-md" />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="email" className="text-lg">Email:</label>
                <input type="email" id="email" name="email" required className="mt-1 p-2 border w-64 rounded-md" />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="message" className="text-lg">Message:</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 p-2 border w-64 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4">Send</button>
            </form>
            <p id="contactConfirmation" className="hidden mt-4 text-green-600">Your message has been sent to technical support!</p>
          </div>
        </section>
      </main>

      <footer className="mt-8">
        <b className="text-xl">MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
}

export default HelpSupportPage;