import React from 'react'
import HomeItem from './HomeItem'

const data = [
  {
  title:'Overview',
  details: 
  "Welcome to our Grade Reporting System. this is a comprehensive platform designed to streamline and simplify the process of reporting and tracking grades. Our system offers an intuitive interface for instructors to efficiently input and manage student grades while providing students with a secure portal to access their academic performance. With robust features such as real-time grade updates, performance analytics, and detailed grade histories, this system aims to enhance transparency and accountability in academic assessments. Whether you're an educator or a student, our Grade Reporting System is tailored to facilitate a seamless experience, ensuring accurate and timely grade reporting for a more productive learning environment."
},
{
  title:'Read More',
  details: "Welcome to our cutting-edge Grade Reporting System, an innovative tool meticulously designed to revolutionize the way we track and manage academic performance. With a user-friendly interface and advanced functionalities, our system empowers educators to efficiently input, analyze, and share student grades, ensuring accuracy and consistency in assessments. For students, this platform offers a transparent view of their academic progress, providing timely access to grades, feedback, and performance analytics. Our goal is to foster a collaborative learning environment by enabling clear communication between instructors and learners. Through this Grade Reporting System, we strive to uphold academic integrity, encourage continuous improvement, and facilitate informed decision-making in educational pursuits. Join us in embracing a smarter, more accessible approach to tracking and reporting grades for an enriched learning journey."
},
{
  title:'issue',
  details: "At University of Ghana, we understand the significance of addressing concerns promptly. Currently, we're diligently working to resolve an issue that has been identified in our system to ensure an uninterrupted user experience. Our technical team is actively engaged in rectifying the issue, striving to provide a seamless and reliable service for our users. We apologize for any inconvenience this may cause and assure you that resolving this matter is our top priority. Rest assured, we're committed to delivering the best possible solutions and experiences, and we appreciate your patience and understanding as we work to enhance our services. This paragraph communicates transparency, reassurance, and a commitment to resolving any issues promptly for a better user experience."
},

]
const Home = () => {
  return (
    <div id='home' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text center text-[#001b5e]'>Home</h1>
      {data.map((item, idx) => (
        <HomeItem key={idx} title={item.title} details={item.details} /> 
      ))}
    </div>
  )
}

export default Home
