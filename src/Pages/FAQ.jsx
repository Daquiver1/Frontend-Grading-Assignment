import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function FAQ() {
  return (
    <div>
      <Navbar />
      <section className="dark:bg-[#0a192f] dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Below are the answers to some frequently asked questions</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> What is the purpose of the Missing Grade Reporting System?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Missing Grade Reporting System is designed to provide a streamlined process for students to report any missing grades and for faculty to address and resolve these issues promptly.</p>
        </details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> Who can use the Missing Grade Reporting System?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> The system is available for use by students who have identified missing grades on their academic records. Faculty members can also use the system to address and rectify reported missing grades. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How do I report a missing grade?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">To report a missing grade, log in to the system and follow the simple steps outlined in the reporting interface. Provide the required information and any supporting documentation to expedite the resolution process. </p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What information do I need to include when reporting a missing grade?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">When reporting a missing grade, please include details such as the course name, instructor's name, and any relevant assignment or exam information. Attach any supporting documents, if available.  </p>
			</details>
      <details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> Is there a deadline for reporting a missing grade?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> While we encourage timely reporting, there is no strict deadline. However, it's advisable to report missing grades as soon as they are identified to ensure prompt resolution. </p>
			</details>
		</div>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST'action ="https://getform.io/f/1b601ae2-9647-4cb8-bb21-9cd83ac0e001" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> //Submit the form below for technical support</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]'type='email' placeholder='Email' name='email' />
        <textarea className="bg-[#ccd6f6] p-2" name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items center '>Submit</button>
      </form>
     
    </div>
	</div>
</section>
<Footer />
    </div>
  )
}

export default FAQ