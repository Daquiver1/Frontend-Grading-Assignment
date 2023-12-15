import React from 'react';

const HelpAndSupportPage = () => {
  return (
    <div>
      <h2>Help and Support</h2>

      {/* FAQ section regarding grade reporting */}
      <section>
        <h3>FAQ</h3>
        <p>Q: How do I report a missing grade?</p>
        <p>A: You can report a missing grade using the Missing Grade Report Form available on the website.</p>
        {/* Add more FAQ items as needed */}
      </section>

      {/* Contact form for technical support (mock-up) */}
      <form>
        <h3>Contact Technical Support</h3>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Describe your issue"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HelpAndSupportPage;

