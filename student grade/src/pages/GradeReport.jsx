import React from 'react';
import Layout from '../layouts';

const GradeReport = () => {
  return (
    <Layout>
        <main>
        <div className="mx-8 mt-8">
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 mb-4 ">
            <p className="mb-2">Student ID: 11019725</p>
            <p className="mb-2 flex items-center justify-end">
                <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded">
                Print Report Page
                </button>
            </p>
            <form>
                <label htmlFor="year" className="mr-2">
                Year:
                </label>
                <select className="border rounded p-2">
                <option></option>  
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Year 4</option>
                </select>
            </form>
            <p className="mt-2">Date: 12-12-24</p>
            </div>
            <hr className="col-span-2" />
            <div className="col-span-2">
            <div className="grid grid-cols-3">
                <p className="col-span-2">First Semester</p>
                <p className="col-span-1">CGPA:3.56</p>
            </div>
            <hr />
            <div className="grid grid-cols-4 font-semibold text-gray-800">
                <h4>Course</h4>
                <h4>IA</h4>
                <h4>Exams</h4>
                <h4>Grade</h4>
                <p>DCIT 101</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>DCIT 102</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>DCIT 103</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>ECON 104</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>STAT 105</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>UGRC 106</p>
                <p>N/A</p>
                <p>N/A</p>
                <p>N/A</p>
            </div>
            </div>
            <hr className="col-span-2" />
            <div className="col-span-2">
            <div className="grid grid-cols-3">
                <p className="col-span-2">Second Semester</p>
                <p className="col-span-1">CGPA:3.4</p>
            </div>
            <hr />
            <div className="grid grid-cols-4 font-semibold text-gray-800">
            <h4>Course</h4>
                <h4>IA</h4>
                <h4>Exams</h4>
                <h4>Grade</h4>
                <p>DCIT 101</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>DCIT 102</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>DCIT 103</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>ECON 104</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>STAT 105</p>
                <p>30</p>
                <p>50</p>
                <p>A</p>
                <p>UGRC 106</p>
                <p>N/A</p>
                <p>N/A</p>
                <p>N/A</p>
            </div>
            </div>
        </div>
        </div>
        </main>
    </Layout>
    );
};

export default GradeReport;
