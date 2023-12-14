import React from "react";
import Layout from "../Layout/Layout";

const contacts =[

  {name:"Instructor one",phone:'0240000000',email:'email@example1'},
  {name:"Instructor two",phone:'0240007777',email:'email@example2'},
  {name:"Instructor three",phone:'0241234567',email:'email@example3'},
  {name:"Instructor four",phone:'0249990009',email:'email@example4'},

];

export default function Dashboard(){


  return(
    <Layout>
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8" >
    <h2 class="mb-4 mt-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Instructors Contacts</h2>

      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light" style={{opacity:5}}>
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">Instructors</th>
              <th scope="col" class="px-6 py-4">contacts</th>
              <th scope="col" class="px-6 py-4">email</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((data,i)=>(
                <tr   key={i+1} class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4">{data.name}</td>
                <td class="whitespace-nowrap px-6 py-4">{data.phone}</td>
                <td class="whitespace-nowrap px-6 py-4">{data.email}</td>
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