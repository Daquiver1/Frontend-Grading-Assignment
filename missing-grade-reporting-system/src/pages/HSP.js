import React, { useState } from "react";

const HelpAndSupportFAQ = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();

        // Perform your contact form submission logic here
        console.log('Contact Form Submitted:', { name, email, message });

        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="items-center container mx-auto lg:max-w-3xl p-8 bg-Charcoal">

            {/* FAQ Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                {/* Include your FAQ content here */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Q: How do I check my grades?</h3>
                    <p>A: You can check your grades by logging into the student portal and navigating to the grades section.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Q: How do I make sure my incorrect grades are rectified?</h3>
                    <p>A: You can rectify your incorrect grades by logging into the student portal and navigating to the missing grade form section.</p>
                </div>
                {/* Add more FAQ items as needed */}
            </div>

            {/* Contact Form Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Contact Technical Support</h2>
                <form onSubmit={handleContactSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder=" e.g. Samuel Ankrah"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 border bg-gray-500 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e.g. someone@yahoo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 border bg-gray-500 rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Want to say something......? Feel free"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="mt-1 p-2 border bg-gray-500 rounded-md w-full"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HelpAndSupportFAQ;
