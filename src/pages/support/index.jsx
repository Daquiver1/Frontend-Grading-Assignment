
import React, { useState } from 'react';
import IMAGE from "../../assets/hlp.jpg"
import Navbar from '../../components/navbar'

const HelpAndSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission (e.g., send an email, store data, etc.)
        console.log('Form submitted:', formData);
        // You can reset the form data if needed
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
        <Navbar />
        <div className="bg-gray-100 min-h-screen p-8" style={{ backgroundImage: `url(${IMAGE})` }}>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Help and Support</h1>

                {/* Help and Support Form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 p-2 border rounded-md w-full"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default HelpAndSupport;




