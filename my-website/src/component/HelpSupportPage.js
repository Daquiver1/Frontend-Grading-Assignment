// src/components/HelpSupportPage.js
import React from 'react';

function HelpSupportPage() {
    return (
        <div>
            <h2>Help and Support Page</h2>
            <div>
                <h3>FAQ</h3>
                <p>Q: How do I report a missing grade?</p>
                <p>A: Navigate to the Missing Grade Form page and fill out the required details.</p>
                {/* Add more FAQ items... */}
            </div>
            <div>
                <h3>Contact Technical Support</h3>
                <form>
                    <label>
                        Your Email:
                        <input type="email" />
                    </label>
                    <br />
                    <label>
                        Message:
                        <textarea />
                    </label>
                    <br />
                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default HelpSupportPage;
