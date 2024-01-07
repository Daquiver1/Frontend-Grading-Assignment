import {useState} from 'react';
import { faqs } from "./FAQsData";
import HandleAnFaq from './HandleAnFaq';
import SideBar from './Sidebar';


function Init() {
  const [formData, setFormData] = useState({
    email: '',
    descriptionOfIssue: ''
  })
  const [questionAndAnswers] = useState(faqs);

  function handleChange(event) {
    const {name, value} = event.target 
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="mx-auto py-4 px-10  md:h-[730px] md:overflow-y-scroll ">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8">
           Faqs
        </h1>

        <section className="grid grid-cols-1 gap-8 ">
          {questionAndAnswers.map((faq, index) => (
            <HandleAnFaq {...faq} key={index} />
          ))}
        </section>

        {/* Contact form for technical support (mock-up). */}
        <form action="" className='mt-5 mb-20 flex flex-col border rounded-lg border-zinc-950 p-2' onSubmit={handleSubmit}>
          <h3 className='my-1 text-center text-slate-700'>Contact form for technical support</h3>
          <input 
            type="email" 
            placeholder='Email' 
            className='mb-4 py-4 pl-1 placeholder-zinc-900 rounded-lg border'
            name='email'
            onChange={handleChange}
            value={formData.email} 
          />

          <textarea  
            type="text" 
            placeholder='Description of the Issue' 
            className='py-4 pl-1 min-h-[70px] max-h-[250px] placeholder-zinc-900 rounded-lg border'
            onChange={handleChange}
            name='descriptionOfIssue'
            value={formData.descriptionOfIssue}
          />

          <button 
            className='mt-3 bg-slate-700 self-center px-20 rounded-lg py-1 hover:bg-slate-900 hover:text-white duration-500'
          >Submit</button>
        </form>
      </section>
  )
}

function HelpAndSupport(){
  return (
    <div>
      <SideBar render={<Init />}/>
    </div>
  )
}

export default HelpAndSupport
