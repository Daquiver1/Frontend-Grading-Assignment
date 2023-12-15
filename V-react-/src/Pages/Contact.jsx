// eslint-disable-next-line no-unused-vars
import { DocumentTextIcon, PhotographIcon } from '@heroicons/react/outline';


import { useState } from 'react';

const Contact = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission and file upload
    console.log('Form submitted!');
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="bg-transparent-900 min-h-screen flex justify-center items-center p-4">
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Report Submission</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please submit your report using the form below.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
              Subject
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="report" className="block text-sm font-medium leading-6 text-gray-900">
              Report Details
            </label>
            <div className="mt-2">
              <textarea
                id="report"
                name="report"
                rows={6}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Provide detailed information about your performance, challenges, and any additional comments.</p>
          </div>

          <div className="col-span-full">
            <label htmlFor="attachment" className="block text-sm font-medium leading-6 text-gray-900">
              Attachment
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <PhotographIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                {selectedFile ? 'Change File' : 'Upload File'}
              </label>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </div>
            {selectedFile && (
              <p className="text-xs leading-5 text-gray-600">{`Selected File: ${selectedFile.name}`}</p>
            )}
            <p className="text-xs leading-5 text-gray-600">Supported formats: PDF, DOCX, or images up to 10MB.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit Report
        </button>
      </div>
    </form>
    </div>
    
  );
};

export default Contact;
