import React, { useState } from 'react';

function Faqs() {
    
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Email submitted:', email);
      console.log('Comments submitted:', comments);
    };
  

  return (
    <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Help & Soppurt Center</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
        </div>

        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">How can I check the status of missing grades or grade updates in the system?</p>
                    <p class="mt-4 text-base text-gray-400">You can check the status of your grades through the student portal or academic system. If you need assistance navigating the system, our support team is available to guide you.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white"> What happens if a missing grade is not resolved before the end of the semester?</p>
                    <p class="mt-4 text-base text-gray-400">If a missing grade is not resolved by the end of the semester, it may impact your ability to progress in your academic program. It is crucial to address missing grades as soon as possible.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white">Are there any penalties for instructors who consistently fail to submit grades on time?</p>
                    <p class="mt-4 text-base text-gray-400">Our institution has policies in place to address timely grade submissions. Instructors are expected to adhere to these policies, and consistent issues may be addressed through appropriate channels.</p>
                </div>
            </div>

            <div class="flex items-start">
                <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span class="text-lg font-semibold text-white">?</span>
                </div>
                <div class="ml-4">
                    <p class="text-xl font-semibold text-white"> Can missing grades impact my academic standing or progression?</p>
                    <p class="mt-4 text-base text-gray-400">Yes, missing grades may have implications for your academic standing. It is important to address them promptly to ensure accurate academic records. If you have concerns about the impact on your standing, contact our academic affairs office for guidance.</p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center mt-4 md:mt-4">
            <div class="px-8 py-4 text-center rounded-full">
            <div className="w-full  flex items-center justify-center">
      <form
        className="bg-white shadow-md rounded p-8 mb-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="my-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comments"
          >
            Comments
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comments"
            placeholder="Enter your comments"
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Faqs