import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id:1,
      question: "How can I contact the lecturer?",
      answer: "By click on contact lecturer on the  my grade page or click on the lecturers card on the contact page.",
    },
    {
      id:2,
      question: 'How do I report a missing grade?',
      answer: 'By click on contact lecturer on the  my grade page or click on the lecturers card on the contact page.',
    },
    {
      id:3,
      question: 'Can anyone file a report?',
      answer: 'Yes, you can file a report as long as you have a tangible reason for doing so.',
    },
    {
      id:4,
      question: 'How long does it take to receive feedback ?',
      answer: 'You would receive feedback as soon as you are done filling the form and when the lecturer responds.',
    }
  ]

  return ( 
    <div className="bg-white py-20">
      <div className=" sm:w-3/4 lg:w-5/12 mx-auto px-2 ">
        <h1 className="capitalize text-center text-3xl text-[#1272df]">frequently asked questions</h1>
        <p className="text-center text-gray-600 mt-4">Here are some of iur FAQs. if you have any other questions you'd like answered feel free to email us.</p>
      </div>
      <div >
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0  bg-gray-100 ">
            <button className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center" onClick={setActiveQuestion === q.id ? null : q.id}>
              {q.question}
              {activeQuestion === q.id ?
              (
                <FaMinusCircle />
              ): <FaPlusCircle/>}
            </button>

            <AnimatePresence>
              {action === q.id &&
              (
                <motion.div 
                initial = {{opacity: 0,height: 0 }}
                animate = {{opacity : 1, height:"auto"}}
                exit = {{opacity: 0, height: 0}}
                className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )
                
               }
            </AnimatePresence>
          </div>
        ))}
          
      </div>



      <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0 border-b py-4  bg-gray-100">
            <button className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100  shadow-md flex justify-between items-center" onClick={setActiveQuestion === q.id ? null : q.id}>
              {q.question}
              {activeQuestion === q.id ?
              (
                <FaMinusCircle />
              ): <FaPlusCircle/>}
            </button>

            <AnimatePresence>
              {action === q.id &&
              (
                <motion.div 
                initial = {{opacity: 0,height: 0 }}
                animate = {{opacity : 1, height:"auto"}}
                exit = {{opacity: 0, height: 0}}
                className="mt-2 text-gray-600 ml-4"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )
                
               }
            </AnimatePresence>
          </div>
        ))}
          
      </div>

    </div>
   );
}
 
export default Faq;