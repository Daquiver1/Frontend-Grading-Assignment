import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer= ()=> {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className='w-full text-3xl font-bold text-pink-300 m-4'>
      UG//MissingGrade.
      </h1>
      <p className='py-4'>Your success is our priority. If you have encountered any issues or need assistance with the Missing Grade Reporting System, our dedicated support team is here to help. Reach out to us at JonathanWick@gmail.com or call 0244377369. Thank you for your collaboration in ensuring accurate and timely academic records.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>Contact</li>
          <li className='py-2 text-sm'>Help</li>
          <li className='py-2 text-sm'>FAQ</li>
          <li className='py-2 text-sm'>Dashboard</li>

        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Procedures</li>
          <li className='py-2 text-sm'>Optimization</li>
          <li className='py-2 text-sm'>Notifications</li>
          <li className='py-2 text-sm'>Issues</li>

        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Navigation</h6>
        <ul>
          <li className='py-2 text-sm'>Support</li>
          <li className='py-2 text-sm'>Accessibility</li>
          <li className='py-2 text-sm'>Channels</li>
          <li className='py-2 text-sm'>Improvements</li>

        </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Feedback</h6>
        <ul>
          <li className='py-2 text-sm'>Contact</li>
          <li className='py-2 text-sm'>E-mail</li>
          <li className='py-2 text-sm'>Telephone</li>
          <li className='py-2 text-sm'>Landline</li>

        </ul>
        </div>
      </div>
      </div>
      
      
  
  )
}

export default Footer