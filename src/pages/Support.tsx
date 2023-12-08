import { Button, TextField } from '@mui/material'
import Layout from '../layouts/Layout'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is the purpose of the grade reporting website?",
    answer:
      "The system operates as a user-friendly website where students can track and report grades not recorded in their academic profiles. It provides an interactive interface for viewing grades, reporting missing ones, and communicating with instructors or academic administration.",
  },

  {
    question: "What steps do I need to follow to report a missing grade?",
    answer:
      "To report a missing grade, log in to the system, navigate to the relevant section, and follow the prompts to submit details about the missing grade, including course information and any supporting documentation.",
  },

  {
    question: "How secure is the system in terms of protecting my academic information?",
    answer:
      "The system prioritizes security to safeguard academic information. Robust encryption and authentication measures are in place to protect user data.",
  },

  {
    question: "Will the system notify me once my missing grade has been addressed?",
    answer:
      " Yes, the system will send notifications to users once their reported missing grades have been reviewed and addressed by instructors or academic administration.",
  },

  {
    question: "Is there a time limit for reporting missing grades?",
    answer:
      "While there may not be a strict time limit, it is recommended to report missing grades promptly to ensure timely resolution.",
  },
  // More questions...
]

const Support = () => {
  const handleFormSubmit = () => {}
  return (
    <Layout>
      <h1 className='text-2xl font-bold py-8 '>Support</h1>
      <div className="bg-white/0 rounded-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-8">
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
      <h1 className='text-2xl font-bold pt-8 px-32'>Send Us a mail</h1>
      <div className='flex flex-col gap-y-4 min-h-[700px] px-32'>
      <TextField id="Issue" label="Issue" variant="outlined" />
      <TextField id="details" label="Details" variant="outlined" multiline rows={5}/>

      <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
      </div>
    </Layout>
  )
}

export default Support