import React from "react";
import help from '../assets/images/help.jpeg'
import Layout from "../layouts";

const HelpPage = () => {
    return(
        <Layout>
            <main className="mx-30">
            <div style={{marginLeft: '30px', marginRight: '30px'}}>
                    <h1 className="text-4xl font-bold mb-4 text-center">Help and Support</h1>
                    <hr className="mb-4" />
                    <img src={help} alt='yo' className='w-full h-45 mb-8 rounded-2xl' />
                </div>
                <div>
                    <p className="mb-8" style={{marginLeft: '30px', marginRight: '30px'}}>
                        Welcome to our Frequently Asked Questions (FAQs) section—a resource designed to address common queries and provide quick solutions. Whether you're a new user navigating the grading system or a returning student seeking clarification, this section aims to offer clear insights into various aspects of the system.<br></br>

                        Here, you'll find organized categories covering a range of topics, from account management to the intricacies of the grading process. The FAQs are tailored to anticipate your concerns and guide you through resolving issues efficiently.<br></br>

                        Our commitment is to enhance your experience with the grading system by offering transparent and accessible information. Explore the FAQs to empower yourself with the knowledge needed to navigate the platform seamlessly. Should you require personalized assistance, feel free to reach out to our support team using the provided contact options.<br></br>

                        Thank you for choosing our grading system—we're here to support your academic journey.<br></br>
                    </p>
                </div>
                <section style={{marginLeft: '30px', marginRight: '30px'}}>
                    <h4 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h4>
                    <div className='grid grid-cols-3 grid-rows-2 gap-4 h-28'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">How to reset pin</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">How to calculate GPA</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">How to get missing grade</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">How to download report</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">Troubleshooting payment failure</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded transition duration-300">File a complaint</button>
                    </div>

                    <div className="mt-8">
                        <form className='enquiries'>
                            <fieldset>
                                <legend className="text-xl font-bold mb-4">For More Enquiries</legend>
                                <label htmlFor='id' className="block mb-2">Student ID:</label>
                                <input type='number' id='Student ID' required className="mb-4 p-2 border border-gray-400 rounded w-full" />
                                <label htmlFor='email' className="block mb-2">Student Email:</label>
                                <input type='email' id='email' required className="mb-4 p-2 border border-gray-400 rounded w-full" />
                                <label htmlFor='subject' className="block mb-2">Subject:</label>
                                <select className="mb-4 p-2 border border-gray-400 rounded w-full">
                                    <option value=''>Select a subject</option>
                                    <option value={'technical'}>Technical Issues</option>
                                    <option value={'account'}>Account Problems</option>
                                    <option value={'general'}>General Inquiry</option>
                                </select>
                                <label htmlFor='message' className="block mb-2">Message:</label>
                                <textarea id='message' required className="mb-4 p-2 border border-gray-400 rounded w-full"></textarea>
                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default HelpPage