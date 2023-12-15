import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the purpose of the Missing Grade Reporting System?",
    answer:
      "The Missing Grade Reporting System is designed to help students track and report grades that are not recorded in their academic profiles. It provides an interactive, user-friendly interface that enables students to view their grades, report missing grades, and communicate with their instructors or academic administration.",
  },
  {
    question: "How can I use the system to track my grades?",
    answer:
      "To track your grades, simply log in to the system and navigate to the 'Grades' section. There, you'll find a comprehensive overview of your academic performance, including all recorded grades and any missing grades that need attention.",
  },
  {
    question: "How do I report missing grades?",
    answer:
      "Reporting missing grades is easy! Visit the 'Report Missing Grades' section, fill in the required information such as the course name, date, and a brief description of the missing grade. Once submitted, the system will notify the relevant instructors and academic administration for prompt resolution.",
  },
  {
    question: "Can I communicate with my instructors through the system?",
    answer:
      "Yes, the system facilitates communication between students and instructors. You can use the 'Communication Hub' to send messages to your instructors regarding missing grades, seek clarification, or discuss any academic concerns. This feature promotes efficient and direct communication to address academic issues promptly.",
  },
  // Add more questions and answers as needed...
];

export default function InstructorContact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
