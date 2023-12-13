import React, { useState } from "react";
import Layout from '../Layout/layout';

const grade = [
   {subject:"Course One",credit:4, assessment:29,term:50,total:79,result:"Pass",grade:"B", semester:"Semester One", date:"2021/2022"},
   {subject:"Course One",credit:4, assessment:30,term:60,total:90,result:"Pass",grade:"A+",semester:"Semester One",date:"2021/2022"},
   {subject:"Course two",credit:4, assessment:25,term:60,total:85,result:"Pass",grade:"A",semester:"Semester Two",date:"2022/2023"},
   {subject:"Course three",credit:4, assessment:20,term:50,total:70,result:"Pass",grade:"B",semester:"Semester Two",date:"2022/2023"},
   {subject:"Course four",credit:4, assessment:28,term:55,total:83,result:"Pass",grade:"A",semester:"Semester Three",date:"2023/2024"},
   {subject:"Course five",credit:4, assessment:30,term:60,total:90,result:"Pass",grade:"A+",semester:"Semester Three",date:"2023/2024"},
];

export default function Dashboard(){

  const [user,setUser]=useState(grade);

  const handleSearch = (e) =>{

  
     grade.filter(obj => {
      

      if(obj.semester === e.target.value){

        setUser([
          {subject:obj.subject,credit:obj.credit, assessment:obj.assessment,term:obj.term,total:obj.total,result:obj.result,grade:obj.grade, semester:obj.semester, date:obj.date},
      ])
      }
    });

  }


  const handleDate = (e) =>{

  
    grade.filter(obj => {
     

     if(obj.date === e.target.value){

       setUser([
         {subject:obj.subject,credit:obj.credit, assessment:obj.assessment,term:obj.term,total:obj.total,result:obj.result,grade:obj.grade, semester:obj.semester, date:obj.date},
     ])
     }
   });

 }


 const handRefresh = () =>{

  setUser(grade)
 }


  return(
    <Layout>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
    <h2 className="mb-4 mt-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Grade Report</h2>

      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th>
            
              <div className="mt-2">
              <select
                   
                  onChange={(e)=>handleSearch(e)}
                  id="semester"
                  name="semester"
                  autoComplete="semester"
                  className="block w-full ml-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-12"
                >
                  <option value={''}>Select Semester</option>
                  <option value={"Semester One"}>semester One</option>
                  <option value={"Semester Two"}>semester Two</option>
                  <option value={"Semester Three"}>semester Three</option>
                  <option value={"Semester Four"}>semester Four</option>
                  <option value={"Semester Five"}>semester Five</option>
                </select>
              </div>
              </th>

              <th>
            
            <div className="mt-2 mr-4">
            <select
                onChange={(e)=>handleDate(e)}
                id="academic Year"
                name="academic Year"
                autoComplete="academic Year"
                className="block w-full ml-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-12"
              >
                <option value={''}>Search Academic Year</option>
                <option value={"2021/2022"}>2021/2022</option>
                <option value={"2022/2023"}>2022/2023</option>
                <option value={"2023/2024"}>2023/2024</option>
              </select>
            </div>
            </th>
            <th colSpan={4}>
            <div className="mt-2">
               <button type="button" onClick={handRefresh} className="text-sm font-semibold leading-6 text-gray-900 ml-12">
                 Refresh Table
                </button>
            </div>
            </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">Subject code/Title</th>
              <th scope="col" className="px-6 py-4">Credits</th>
              <th scope="col" className="px-6 py-4">Internal Assessment(30 marks)</th>
              <th scope="col" className="px-6 py-4">End Term Examination(70 marks)</th>
              <th scope="col" className="px-6 py-4">Total Marks</th>
              <th scope="col" className="px-6 py-4">Final Result</th>
              <th scope="col" className="px-6 py-4">Grade</th>
              <th scope="col" className="px-6 py-4">Semester</th>
              <th scope="col" className="px-6 py-4">Academic Year</th>
            </tr>
          </thead>
          <tbody>

            {console.log(grade)}

            {
              user?.map((data,i)=>(
                <tr key={i+1} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{data.subject}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.credit}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.assessment}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.term}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.total}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.result}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.grade}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.semester}</td>
                <td className="whitespace-nowrap px-6 py-4">{data.date}</td>
              </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
    </Layout>
  )
}