import React from 'react'

function Faq() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">I've noticed a grade is missing from my recent assessments. What should be my first course of action?</p>
                    <p className="mt-3 text-base text-gray-600">We understand the concern regarding missing grades. Begin by double-checking the online portal for any recent updates. </p>
                    <p className="mt-3 text-base text-gray-600">If the grade is still missing, reach out to your instructor promptly, providing details about the specific assessment and any relevant submission receipts.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How long does it typically take for grades to be updated in the system?</p>
                    <p className="mt-3 text-base text-gray-600">Grade update timelines can vary based on course requirements and instructor policies. If you find a delay beyond the expected timeframe, it's advisable to contact your instructor for clarification. They can offer insights into the grading process and any unforeseen delays.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Can I request a grade review if I believe there's been an oversight?</p>
                    <p className="mt-3 text-base text-gray-600">Certainly. If you believe there's been an oversight, you have the right to request a grade review. Initiate this process by contacting your instructor and providing a clear explanation of your concerns. They will guide you through the formal review procedure.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">I've reached out to my instructor about a missing grade, but haven't received a response. What's the next step?</p>
                    <p className="mt-3 text-base text-gray-600">
                    We apologize for any inconvenience. If you haven't received a response, please escalate the matter by contacting the department coordinator or academic office. They will assist you in ensuring your concern is addressed promptly. <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@academicaffairs.com</a>
                    </p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">Is there a feature to set up notifications for grade updates?</p>
                    <p className="mt-3 text-base text-gray-600">
                    Yes, many educational platforms offer notification features. Check your account settings or contact your institution's IT support to enable notifications for grade updates. This way, you can stay informed about any changes to your academic records.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Faq

