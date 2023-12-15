import React from 'react';

function HelpAndSupportPage() {
  return (
    <div className="min-h-screen"
    style={{
      backgroundImage:'url(src/assets/unsplash1.jpg)',
      backgroundSize:'cover',
      backgroundPosition:'center',

    }}
    >
      <h1>Help and Support</h1>
      <h2>FAQ</h2>
      <p>Here are some frequently asked questions regarding grade reporting:</p>
      <ul>
        <li>Q: What should I do if I notice a missing grade?</li>
        <li>A: You can report the missing grade using the Missing Grade Form page.</li>
        <li>Q: How long does it take for the missing grade to be recorded?</li>
        <li>A: It usually takes 2-3 business days for the missing grade to be recorded.</li>
        <li>Q: Can I report a missing grade for a course that I am not enrolled in?</li>
        <li>A: No, you can only report missing grades for courses that you are currently enrolled in.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you need technical support, please fill out the following form:</p>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HelpAndSupportPage;
