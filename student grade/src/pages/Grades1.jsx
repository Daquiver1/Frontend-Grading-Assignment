import React from "react";

const Grades = () => {
    return(
        <div style={{marginLeft: '30px', marginRight: '30px'}}>
            <hr style={{marginTop:'30px'}}/>
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
    )
}

export default Grades