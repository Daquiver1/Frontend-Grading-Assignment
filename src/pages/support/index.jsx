import React from 'react';
import DashboardLayout from '../../components/shared/DashboardLayout';

const Support = () => {
  return (
    
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-8 text-center">Help and Support</h1>

      <FAQ />

      <TechnicalSupportForm />
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">FAQs - Grade Reporting</h2>
      <div className="border-b-2 border-gray-300 mb-8"></div>

      <div className="space-y-4">
        <QuestionAnswer question="How do I access my child's grade report?" answer="You can access your child's grade report by logging into the parent portal and navigating to the 'Grades' tab." />
        <QuestionAnswer question="Why is my child's grade not showing up?" answer="If your child's grade is not showing up, it may be because the teacher has not yet entered it. Please contact the teacher directly for more information." />
        <QuestionAnswer question="Can I see my child's grades for all classes?" answer="Yes, you can see your child's grades for all classes by logging into the parent portal and navigating to the 'Grades' tab." />
      </div>
    </div>
  );
};

const QuestionAnswer = ({ question, answer }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

const TechnicalSupportForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Technical Support</h2>
      <div className="border-b-2 border-gray-300 mb-8"></div>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea name="message" id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>
      </form>
    </div>
    
 );
};

export default Support ;
