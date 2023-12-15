import {useState} from 'react';
import { faqs } from "./FAQsData";
import HandleAnFaq from './HandleAnFaq';

function HelpAndSupport() {
  const [questionAndAnswers] = useState(faqs);

  return (
    <section className="max-w-xl mx-auto py-4 px-4">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8">
           Faqs
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {questionAndAnswers.map((faq, index) => (
            <HandleAnFaq {...faq} key={index} />
          ))}
        </section>

        {/* Contact form for technical support (mock-up). */}
        <form action="" className='mt-5 mb-20 flex flex-col border rounded-lg border-zinc-950 p-2'>
          <input 
            type="text" 
            placeholder='Email' 
            className='mb-4 py-4 pl-1 placeholder-zinc-900 rounded-lg border'
          />

          <textarea  
            type="text" 
            placeholder='Description of the Issue' 
            className='py-4 pl-1 min-h-[70px] max-h-[250px] placeholder-zinc-900 rounded-lg border'
          />

          <button 
            className='mt-3 bg-slate-700 self-center px-20 rounded-lg py-1 hover:bg-slate-900 hover:text-white duration-500'
          >Submit</button>
        </form>
      </section>
  )
}

export default HelpAndSupport
