import React from 'react'

function Help() {
  return (
    <div class="flex min-h-screen items-center justify-center bg-pink-200">
      <section class="px-40">
        <div class="mb-24 text-center">
          <h3 class="block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-black">
            {" "}
            We’ve got answers{" "}
          </h3>
          <h1 class="block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-black md:text-5xl">
            {" "}
            Frequently Asked Questions{" "}
          </h1>
          <p class="block antialiased font-sans relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-600 md:text-xl lg:max-w-4xl">
            {" "}
            Check out what other people are usually interested in!{" "}
          </p>
        </div>
        <div class="grid grid-cols-12 ">
          <div class="col-span-12 lg:col-start-4 lg:col-span-6">
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              "What should I do if I have missing grades on my academic
              transcript?"
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This FAQ can delve into specific actions a person can take if they
              discover incomplete or absent grades on their academic record. It
              might cover contacting instructors or academic advisors,
              understanding the grading policy of the institution, or exploring
              procedures for grade inquiries or corrections.{" "}
            </div>
            <hr class="my-6 border-blue-gray-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              "How do I handle missing grades at the end of the semester?"{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This question might address the common concern of students
              encountering missing grades towards the end of a term. It could
              cover recommended actions such as reaching out to professors,
              checking if there are any outstanding assignments or assessments,
              or contacting the registrar's office for guidance on resolving the
              issue.{" "}
            </div>
            <hr class="my-6 border-blue-gray-50" />
            <hr class="my-6 border-blue-gray-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              What recourse do I have if there are missing grades in my academic
              records?"{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This question can highlight the options available to students when
              faced with missing grades in their academic records. It could
              touch upon actions like communicating with professors or
              department heads, understanding institutional policies for grade
              reporting, and seeking guidance from academic advisors or
              administrative staff to rectify the situation.{" "}
            </div>
            <hr class="my-6 border-blue-gray-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              How can I address missing grades from my coursework?{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This question might focus on actionable steps for students dealing
              with missing grades in their coursework. It could cover strategies
              such as promptly contacting course instructors or professors,
              inquiring about grading timelines, and following up with the
              appropriate academic departments or administrative offices for
              clarification and resolution.{" "}
            </div>
            <hr class="my-6 border-blue-gray-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              What should I do if there are incomplete grades or missing course
              results in my academic history{" "}
            </h5>

            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This question could address concerns about incomplete or absent
              grades in a student's academic history. It might cover steps such
              as contacting instructors directly, following the institution's
              protocol for grade discrepancies, and understanding the timeline
              or procedure for grade updates or corrections.{" "}
            </div>
            <hr class="my-6 border-blue-gray-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black">
              {" "}
              "How can I address missing grades on my academic transcript and
              ensure their timely inclusion?"{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600">
              {" "}
              This question could focus on proactive steps a student can take to
              resolve missing grades on their transcript. It might include
              advice on promptly contacting professors or academic advisors,
              understanding the institution's procedures for grade submission or
              verification, and keeping track of communications or follow-ups to
              ensure a timely resolution.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;