import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: " What should I do if I haven't received my grade report?",
    answer:
      "If you haven't received your grade report within the expected timeframe, first check your email or student portal for any notifications regarding delays. If there's no update, contact your instructor or the academic department responsible for grades to inquire about the status.",
  },
  {
    question: "How long does it usually take to receive grade reports?",
    answer:
      "Grade report delivery times can vary. Generally, they are available shortly after the grading period ends. However, factors such as the institution's grading process or technical issues might cause delays.",
  },
  {
    question: "Can I access my grade report online?",
    answer:
      "Yes, the University of Ghana provides access to grade reports through online portals. Check your student account on the institution's website or the designated student platform for your grades.",
  },
  {
    question: " Whom should I contact if my grade report is missing?",
    answer:
      "If your grade report hasn’t been received or is delayed, contact your course instructor or the academic office. They can assist in providing information or tracking down the issue.",
  },
  {
    question: "Is there a specific timeframe for grade report issuance?",
    answer:
      "While there's usually an expected timeframe for grade reporting, it's essential to understand that variations may occur due to administrative processes or unexpected circumstances. Check the academic calendar or inquire with the academic department for specific timelines.",
  },
  {
    question: "What if there's an error on my grade report?",
    answer:
      " If you notice an error on your grade report, promptly notify your instructor or academic advisor. They can guide you on the process for rectifying any inaccuracies.",
  },
  {
    question: "Can grades be reissued if lost or not received?",
    answer:
      " In cases of lost or undelivered grade reports, institutions often have procedures for reissuing them upon request. Contact the registrar's office or the academic administration to request a reissue..",
  },
  {
    question: " Is there a deadline to report missing grade reports?",
    answer:
      "The university generally sets deadlines for reporting missing grade reports. To ensure timely resolution, it's advisable to report missing grades promptly to the relevant department.",
  },
  {
    question: "What happens if I need my grades urgently for academic purposes?",
    answer:
      "If you require your grades urgently for academic purposes, communicate the urgency to the academic office or registrar. They might be able to expedite the process or provide temporary documentation.",
  },
  {
    question: "Are there any common reasons for delayed grade reports?",
    answer:
      "Several factors can contribute to delayed grade reports, such as grading complexity, technical issues with the grading system, or unforeseen administrative delays. These reasons can impact the timely release of grades.",
  },
  // More questions...
];

const Help = () => {
  return (
    <div className="mx-auto mt-2 max-w-9xl px-6 ">
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
  );
};

export default Help;
