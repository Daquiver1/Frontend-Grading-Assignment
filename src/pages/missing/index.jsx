import React, { useState } from 'react';
import DashboardLayout from '../../layout';

const Missing = () => {
    const [courseName, setCourseName] = useState('');
    const [instructorName, setInstructorName] = useState('');
    const [expectedGrade, setExpectedGrade] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();




        alert('Grade report submitted!');
        setCourseName('');
        setInstructorName('');
        setExpectedGrade('');
        setExplanation('');
    };

    return (
        <DashboardLayout title={"Missing Report"}>
            <div className="bg-gray-100 min-h-screen p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-center">Missing Grade Form</h1>

                    {/*  form */}
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="courseName" className="block text-sm font-medium text-gray-600">
                                Course Name:
                            </label>
                            <input
                                type="text"
                                id="courseName"
                                name="courseName"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="instructorName" className="block text-sm font-medium text-gray-600">
                                Instructor Name:
                            </label>
                            <input
                                type="text"
                                id="instructorName"
                                name="instructorName"
                                value={instructorName}
                                onChange={(e) => setInstructorName(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="expectedGrade" className="block text-sm font-medium text-gray-600">
                                Expected Grade:
                            </label>
                            <input
                                type="text"
                                id="expectedGrade"
                                name="expectedGrade"
                                value={expectedGrade}
                                onChange={(e) => setExpectedGrade(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="explanation" className="block text-sm font-medium text-gray-600">
                                Explanation:
                            </label>
                            <textarea
                                id="explanation"
                                name="explanation"
                                value={explanation}
                                onChange={(e) => setExplanation(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Missing;
