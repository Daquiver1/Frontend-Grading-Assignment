import React from 'react'
import Navbar from './Navbar'
import '../styles/HelpPage.css'
import SearchBar from './Searchbar'
import Footer from './FooterPage'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, } from '@heroicons/react/24/outline'
import { FaQuestionCircle } from 'react-icons/fa'
const faqs = [
    {
      question: "How do I report a missing grade?",
      answer:
        "To report a missing grade, please contact your instructor directly or use the designated reporting mechanism on the platform. Check your course syllabus or contact the academic department for specific instructions.",
    
    },
    {
        question: "What is the timeline for grade submission?",
        answer:
          "Grade submission timelines vary by course and instructor. Refer to your course syllabus or contact your instructor for information on when grades will be submitted.", 
    },
    {
        question:"Can I request a grade review or appeal?",
        answer:"Yes, you can request a grade review or appeal. Follow the official process outlined in the academic policies document, which is usually available on the institution's website or from the registrar's office."
    },
    {
        question:"How can I check my grades online?",
        answer:'You can check your grades online through the [Name of the System]. Log in with your credentials, navigate to the "Grades" or "Academic Records" section, and select the relevant term or course.'
    },
    {
        question:"What should I do if I believe there is an error in my grade?",
        answer:"If you believe there is an error in your grade, contact your instructor immediately to discuss the concern. Provide clear details about the specific assignment or assessment in question."
    },
    {
        question:"Is there a way to view my graded assignments and feedback?",
        answer:"Graded assignments and feedback are typically available within the course platform. Navigate to the specific assignment or assessment section to view detailed feedback from your instructor."
    },
    {
        question:"Can I get an explanation for my grade?",
        answer:"Yes, you can request an explanation for your grade. Reach out to your instructor and schedule a meeting or send an email outlining your request for clarification."
    },
    {
        question:"Are there any makeup or reevaluation options for missed assessments?",
        answer:"Makeup or reevaluation options depend on the course policies. Check your course syllabus or contact your instructor to discuss any missed assessments and possible options."
    },
    {
        question:"How are grades calculated in the system?",
        answer:"Grades are calculated based on the grading scale outlined in the course syllabus. Refer to the syllabus for details on the weightage of different assessments and the overall grading criteria."
    },
    {
        question:"Can I see a history of my past grades?",
        answer:"Yes, you can usually view a history of your past grades through the academic records or transcript section of the platform. Contact the registrar's office if you need an official transcript."
    },
    {
        question:"How do I update my contact information for grade notifications?",
        answer:""
    },
  ]
const HelpPage = () => {
  return (
    <>
        <div className=''>
            <Navbar/>   
            <SearchBar/>
            <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                        <>
                            <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                                </span>
                            </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                    ))}
                </dl>
                </div>
            </div>
            </div> 
            <div>
                <div className='mx-44 shadow-lg' style={{border:'0.1px solid gray', padding:'20px' ,width:'450px'}} >
                    <form >
                        <p className='mb-4'>Fill the form below to seek technical support</p>
                        <p className='mb-4 text-sm'><i>The fields with <span style={{color:'red'}}>*</span> are required</i></p>
                        <p>
                        Student Name 
                        </p>
                        <br/>
                        <div className='border-solid black'>                
                        <input type='text' placeholder=' ' style={{border: '1px solid gray',borderRadius: '5px', width: '350px', padding:'3px'}}/>
                        </div>
                        <div className='border-solid black pt-9 shadow-black'> 
                        <p>
                        Student ID<span style={{color:'red'}}>*</span>
                        </p> 
                        <br/>
                            <input type='text' placeholder='' style={{border: '1px solid gray', borderRadius: '5px', width: '100px', padding: '3px'}}/>
                        </div>
                        <div className='border-solid black pt-9 shadow-black'> 
                        <p>
                        Problem<span style={{color:'red'}}>*</span>
                        </p> 
                        <br/>
                            <input type='text' placeholder='' style={{border: '1px solid gray', borderRadius: '5px', width: '350px',height:'100px', padding: '3px'}}/>
                        </div>
                        <button style={{background:'gray', color: 'whitesmoke', padding: '2px', borderRadius: '5px', width:'100px', marginTop:'9px'}}>Submit</button>

                    </form>
                </div>
                <div className='mx-44 shadow-lg' style={{display:'flex' ,border:'1px solid gray', width: '450px', marginTop:'70px', height:'150px', padding:'50px'}}>
                    <div>
                        <FaQuestionCircle className="icon cart" style={{height: '35px', width:'35px'}}/>
                    </div>
                    <div style={{paddingLeft:'20px'}}>
                        <p>
                            Still in doubt?
                        </p>
                        <p>
                            <a href='/Instructor' style={{color:'blueviolet' }}>Contact </a> our instructors for help
                        </p>
                    </div>
                </div>
                
            </div>                    
            <Footer/>
        </div>

    
    </>
  )
}

export default HelpPage


