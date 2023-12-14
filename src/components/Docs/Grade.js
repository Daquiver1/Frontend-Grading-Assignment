mport React, { useState } from "react";
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
