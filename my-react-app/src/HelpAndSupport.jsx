import React from 'react';

const HelpAndSupport = () => {
    return (
        <section style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <h2>Help and Support</h2>

            <div style={{ marginBottom: '20px' }}>
                <h3>Frequently Asked Questions (FAQ)</h3>
                <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
                    <li>
                        <strong>Q:</strong> How can I reset my password?
                        <br />
                        <strong>A:</strong> You can reset your password by clicking on the "Forgot Password" link on the login page.
                    </li>
                    <br />
                    <li>
                        <strong>Q:</strong> Is there a mobile app available?
                        <br />
                        <strong>A:</strong> Yes, you can download our mobile app from the App Store or Google Play Store.
                    </li>
                    {/* Add more FAQ items as needed */}
                </ul>
            </div>

            <div>
                <h3>Contact Technical Support</h3>
                <p>For technical assistance, please provide the following information:</p>
                <form style={{ textAlign: 'left' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Your Full Name:</label>
                        <input type="text" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email Address:</label>
                        <input type="email" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Subject of Inquiry:</label>
                        <input type="text" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Your Message:</label>
                        <textarea style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div>
                        <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HelpAndSupport;