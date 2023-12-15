import React from 'react';



const GradeSummary = () => {
 const calculateGPA = (grade) => {
    switch (grade) {
      case 'A':
        return 4.0;
      case 'B':
        return 3.0;
      case 'C':
        return 2.0;
      case 'D':
        return 1.0;
      default:
        return 0.0;
    }
 };

 const calculateTotalGPT = (grade, gpt) => {
    const gradePoint = calculateGPA(grade) * gpt;
    return gradePoint;
 };

 const data = [
    {
      courseTitle: 'Introduction to Computer Science',
      academicYear: '2022/2023',
      semester: 'First Semester',
      grade: 'A',
      gpt: 12,
    },
    // Add more course data as needed
 ];

 const totalGPA = data.reduce((sum, course) => {
    const gradePoint = calculateTotalGPT(course.grade, course.gpt);
    return sum + gradePoint;
 }, 0);

 const totalGP = data.reduce((sum, course) => {
    return sum + course.gpt;
 }, 0);

 const GPA = totalGPA / totalGP;

 return (
    <div className="bg-transparent text-Charcoal font-extrabold min-h-screen">
        <h1 className="text-4xl font-bold mb-8 px-60 py-6">ACADEMIC RECORD</h1>
      <div className="container px-8 py-8">
        
        <table className="table-auto w-full border-separate border-spacing-0">
          <thead>
            <tr className=" ">
                <th className="border-t border-gray-800 px-4 py-8 ">ACADEMIC YEAR: 2022/2023</th>
                <th className="border-t border-gray-800 px-4 py-2">FIRST SEMESTER  </th>
                <th className="border-t border-gray-800 px-4 py-2">CCT: 18</th>   
                <th className="border-t border-gray-800 px-4 py-2">CCP: 18 </th> 
                <th className="border-t border-gray-800 px-4 py-2">GPA: {GPA.toFixed(2)} </th>
            </tr>

            <tr>
              <th className='border-t  border-gray-800 px-4 py-2'>Code</th>
              <th className=" border-t border-gray-800 px-4 py-2">Course Title</th>
              <th className=" border-t border-gray-800 px-4 py-2">Credit</th>
              <th className=" border-t border-gray-800 px-4 py-2">Grade</th>
              <th className=" border-t border-gray-800 px-2 py-2">GPT</th>
            </tr>
          </thead>
          <tbody>
        
            <tr>
              <td className="border-t border-gray-800 px-24 py-2">DCIT 101</td>
              <td className="border-t border-gray-800 px-2 py-2">Introduction to Computer Science</td>
              <td className="border-t border-gray-800 px-20 py-2">3</td>
              <td className="border-t border-gray-800 px-20 py-2">A</td>
              <td className="border-t border-gray-800 px-16 py-2">12</td>
            </tr>
            
            <tr>
              <td className=" px-24 py-2">DCIT 103</td>
              <td className=" px-2 py-2">Office Productivity Tools</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>

            <tr>
              <td className=" px-24 py-2">MATH 121</td>
              <td className=" px-2 py-2">Algebra and Trigonometry</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>

            <tr>
              <td className=" px-24 py-2">MATH 123</td>
              <td className=" px-2 py-2">Vectors and Geometry</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
            <tr>
              <td className=" px-24 py-2">STAT 111</td>
              <td className=" px-2 py-2">Introduction to Statistics and Probability I</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
            <tr>
              <td className=" px-24 py-2">UGRC 150</td>
              <td className=" px-2 py-2">Critical Thinking and Practical Reasoning</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
            <tr className=" ">
                <th className="border-t border-gray-800 px-4 py-8 ">ACADEMIC YEAR: 2022/2023</th>
                <th className="border-t border-gray-800 px-4 py-2">SECOND SEMESTER  </th>
                <th className="border-t border-gray-800 px-4 py-2">CCT: 36</th>   
                <th className="border-t border-gray-800 px-4 py-2">CCP: 36 </th> 
                <th className="border-t border-gray-800 px-4 py-2">GPA: {GPA.toFixed(2)} </th>
            </tr>
            <tr>
              <th className='border-t border-gray-800 px-4 py-2'>Code</th>
              <th className=" border-t border-gray-800 px-4 py-2">Course Title</th>
              <th className=" border-t border-gray-800 px-4 py-2">Credit</th>
              <th className=" border-t border-gray-800 px-4 py-2">Grade</th>
              <th className=" border-t border-gray-800 px-2 py-2">GPT</th>
            </tr>
            <tr>
              <td className="border-t border-gray-800 px-24 py-2">DCIT 102</td>
              <td className="border-t border-gray-800 px-2 py-2">Computer Hardware Fundamentals and Circuits</td>
              <td className="border-t border-gray-800 px-20 py-2">3</td>
              <td className="border-t border-gray-800 px-20 py-2">A</td>
              <td className="border-t border-gray-800 px-16 py-2">12</td>
            </tr>
            
            <tr>
              <td className=" px-24 py-2">DCIT 104</td>
              <td className=" px-2 py-2">Programming Fundamentals</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>

            <tr>
              <td className=" px-24 py-2">MATH 122</td>
              <td className=" px-2 py-2">Calculus I</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>

            <tr>
              <td className=" px-24 py-2">MATH 126</td>
              <td className=" px-2 py-2">Algebra and Geometry</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
            <tr>
              <td className=" px-24 py-2">STAT 112</td>
              <td className=" px-2 py-2">Introduction to Statistics and Probability II</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
            <tr>
              <td className=" px-24 py-2">UGRC 110</td>
              <td className=" px-2 py-2">Academic Writing I</td>
              <td className=" px-20 py-2">3</td>
              <td className=" px-20 py-2">A</td>
              <td className=" px-16 py-2">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
 );
};

export default GradeSummary;