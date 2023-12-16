import React from 'react';

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className = "footer-content">
         <style>
        {`

          ul {
            columns: 2;
            column-gap: 20px; 
            list-style: none; 
            padding: 0; 
          }

          @media (min-width: 768px) {
            ul {
              columns: 3; 
            }
          }
        `}
      </style>
      <div className='w-full mt-24' style={{
                background: 'linear-gradient(to right, #333, #00df9a)',
                color: 'white',
      }}>
                <div className='w-full mt-24'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '2rem', fontSize: '18px' }}>
                        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Grade tracking</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Academic record-keeping</li>
                    <li className='py-1'>Cloud</li>
                    <li className='py-1'>Testimonials</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Organization</h6>
                <ul className = 'flex-col'>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Partners</li>
                    <li className='py-1'>Leadership/Team</li>
                    <li className='py-1'>Company Blog</li>
                    <li className='py-1'>FAQs</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul className = 'flex-col'>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'> All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer;