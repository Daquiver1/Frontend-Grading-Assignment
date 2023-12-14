import React from 'react'
import Navbar from './Navbar'
import '../styles/HelpPage.css'
import SearchBar from './Searchbar'
import Footer from './FooterPage'
const HelpPage = () => {
  return (
    <>
        <div className=''>
            <Navbar/>   
            <SearchBar/> 
            <div className='text-3xl mt-10 ml-5 mb-12'>
                <b>How can we help you?</b>
            </div>
            
            <div className='text-start text-xl ml-5 shadow-xl' style={{width:'90%'}}>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px' }}>
                    <p>Frequently Asked Questions</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Getting Started Guide</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>User Guides and Tutorials</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Troubleshooting and Problem-Solving</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Contact Information</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Live Chat or Support Chat</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Community Forums or Discussion Boards</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Account and Profile Management</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Feedback and Suggestions</p>
                </div>
                <div className='pt-6 pl-6' style={{border:'1px solid gray', height:'80px', borderRadius:'5px', marginBottom:'3px'}}>
                    <p>Privacy Policy and Terms of Service</p>
                </div>
            </div>
            <div className='mt-10 ml-12' >
                <b className='text-2xl'>Need more Info?</b>
            </div>
            <div className='text-xl ml-12'>
                <a href='/Instructor' style={{color:'gray'}} className='text-md'><i>Click here</i></a> <span >to contact our instructors</span>
                
            </div>
            <Footer/>
        </div>

    
    </>
  )
}

export default HelpPage


