import React from 'react';

const HelpAndSupport = () => {
    return (
        <section style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <h2>Help and Support</h2>

            <div style={{ marginBottom: '20px' }}>
                <h3>Frequently Asked Questions (FAQ)</h3>
                <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left' }}>
                    <li>
                        <strong>Q:</strong> How do I report a missing grade?
                        <br />
                        <strong>A:</strong> You can report a missing grade through the "Missing Grade" section in your dashboard.
                    </li>
                    <br />
                    <li>
                        <strong>Q:</strong> How do I check my grades?
                        <br />
                        <strong>A:</strong> You can check your grades at the "Grade Report" section in your menu/sidebar.
                    </li>
                    {/* Add more FAQ items as needed */}
                </ul>
            </div>

            <div>
                <h3>Contact Technical Support</h3>
                <p>For technical assistance, please fill out the form below:</p>
                <form style={{ textAlign: 'left' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Your Name:</label>
                        <input type="text" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email:</label>
                        <input type="email" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Subject:</label>
                        <input type="text" style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Message:</label>
                        <textarea style={{ width: '100%', padding: '8px' }} />
                    </div>
                    <div>
                        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HelpAndSupport;
