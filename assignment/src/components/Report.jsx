import { useState } from "react";
import Footer from "./Footer";


const Courses = [
    {
    name:"Data Mining(STAT 109)",
    grade:"C+",
    semester:"First Semester",
    year: "2019"
},

{
    name:"Machine Learning(DCIT 106)",
    grade:"B+",
    semester:"First Semester",
    year: "2019"
},

{
    name:"Computer Fundamentals(DCIT102)",
    grade:"A",
    semester:"First Semester",
    year: "2019"
},

{
    name:"Aca Writing(CBAS 101)",
    grade:"A",
    semester:"Second Semester",
    year: "2019"
},

{
    name:"Computer Ethics(DCIT211)",
    grade:"A",
    semester:"Second Semester",
    year: "2019"
},

{
    name:"Circuit and Logic(DCIT 321)",
    grade:"D",
    semester:"Second Semester",
    year: "2019"
},

{
    name:"Automata(CSCC 109)",
    grade:"C+",
    semester:"First Semester",
    year: "2019"
},

{
    name:"Ethical Hacking(DCIT 209)",
    grade:"A",
    semester:"First Semester",
    year: "2020"
},

{
    name:"Web Architecture(DCIT 205)",
    grade:"A",
    semester:"First Semester",
    year: "2020"
},

{
    name:"Human Computer Relation(DCIT 309)",
    grade:"C+",
    semester:"First Semester",
    year: "2020"
},

{
    name:"Discrete Maths(DCIT 105)",
    grade:"B",
    semester:"Second Semester",
    year: "2020"
},

{
    name:"Cyber Security(DCIT 114)",
    grade:"A",
    semester:"Second Semester",
    year: "2020"
},

{
    name:"Data Security(DCIT 309)",
    grade:"D+",
    semester:"Second Semester",
    year: "2020"
},

{
    name:"Economics(ECON 100)",
    grade:"B+",
    semester:"First Semester",
    year: "2021"
},

{
    name:"Probability and Statistics(STAT 106)",
    grade:"B+",
    semester:"First Semester",
    year: "2021"
},

{
    name:"Office Productivity Tools(DCIT103)",
    grade:"A",
    semester:"First Semester",
    year: "2021"
},

{
    name:"Critical Thinking(UGRC 150)",
    grade:"A",
    semester:"Second Semester",
    year: "2021"
},

{
    name:"AI Development(DCIT 304)",
    grade:"B+",
    semester:"Second Semester",
    year: "2021"
},

{
    name:"Modern Technology(DCIT 207)",
    grade:"A",
    semester:"Second Semester",
    year: "2021"
},



];

const GradesReport = () => {
    const [semester,setSemester] = useState('');
    const [year,setYear] = useState('')
    const handleSemesterChange = (e) => {
        setSemester(e.target.value);
    };
    const handleAcademicYear =(e) => {
        setYear(e.target.value);
    };

    const FilteredCourses = Courses.filter((courses)=> {
        return(
            (!semester||courses.semester===semester)&& (!year||courses.year===year)
        );
    }
    );
        
    

    return ( 
        <>
       <div className="flex self-center">
        <h2 className="text-center font-bold text-2xl text-blue-700 pl-5">Grade Summary</h2>
        <div className="  text-center ">
            <label className="font-bold " htmlFor="semester">Semester: </label>
            <select className="bg-blue-200 text-center font-semibold rounded shadow-md mr-20" name="semester" id="semester" onChange={handleSemesterChange}>
                <option value="">All Semesters</option>
                <option value="First Semester">First Semester</option>
                <option value="Second Semester">Second Semester</option>
            </select>
            <label className="font-bold" htmlFor="year">Academic Year: </label>
            <select className="bg-blue-200 text-center font-semibold rounded shadow-md" name="year" id="year" onChange={handleAcademicYear}>
                <option value="">All Years</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>

           <table className="bg-blue-200 mt-16">
            
            <thead>
                <tr className="bg-gray-200 text-blue-700 p-5">
                    <th scope="col">Courses</th>
                    <th  scope="col">Semester</th>
                    <th scope="col">Year</th>
                    <th scope="col">Grade</th>
                </tr>
            </thead>

            <tbody>
                {FilteredCourses.map((courses) =>
                (
                <tr key={courses.id}>
                    <td className="px-9 font-sans text-[16px] leading-8 font-semibold">{courses.name}</td>
                    <td className="px-9 font-sans text-[16px] leading-8 font-semibold">{courses.semester}</td>
                    <td className="px-9 font-sans text-[16px] leading-8 font-semibold">{courses.year}</td>
                    <td className="px-9 font-sans text-[16px] leading-8 font-semibold">{courses.grade}</td>

                </tr>
               ) )}
            </tbody>
           </table>
            
        </div>
       </div>
       <Footer/>
        </>
     );
}

 
export default GradesReport ;