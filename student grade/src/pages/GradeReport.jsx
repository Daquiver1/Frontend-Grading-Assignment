import React from 'react';
import Layout from '../layouts';

const GradeReport = () => {
  return (
    <Layout>
        <main>
        <hr className="col-span-2" style={{marginLeft:'30px', marginRight: '30px'}}/>
        <div className="mx-8 mt-8">
        <div className="grid grid-cols-2 gap-4 mt-4" style={{marginBottom: '30px'}}>
                <p> Student ID : 1104658</p>
                <button type='print' className='bg-blue-500 hover:bg-blue-700 py-1 w-30 px-1 rounded transition duration-300'>Print Grade Report</button>
                <select className="p-2 w-20">
                    <option value="" disabled selected> Year</option>
                    <option>Year 1</option>
                    <option>Year 2</option>
                    <option>Year 3</option>
                    <option>Year 4</option>
                </select>
                <p className='text-right'> Date : 12-12-32</p>
        </div>
            <hr className="col-span-2" />
            <div className="col-span-2">
            <div className="grid grid-cols-3">
                <p className="col-span-2">First Semester</p>
                <p className="col-span-1">CGPA:3.56</p>
            </div>
            <hr />
            <div className="grid grid-cols-4 font-semibold gap-4 text-gray-800">
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
            <hr className="col-span-2" style={{marginTop: '30px'}} />
            <div className="col-span-2">
            <div className="grid grid-cols-3">
                <p className="col-span-2">Second Semester</p>
                <p className="col-span-1">CGPA:3.4</p>
            </div>
            <hr/>
            <div className="grid grid-cols-4 font-semibold text-gray-800 gap-4">
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
        </main>
    </Layout>
    );
};

export default GradeReport;
