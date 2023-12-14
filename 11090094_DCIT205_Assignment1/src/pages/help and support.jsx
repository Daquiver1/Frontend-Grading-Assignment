export const Help_and_Support = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-gray-400 text-justify p-5">
          <p className=" font-bold text-3xl text-center">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <div className="my-5">
            <p>What should I do if my grade report is missing?</p>
            <p>-Fill the Missing Grade form accurately.</p>
          </div>
          <div className="my-5">
            <p>How long does it take for grades to be updated in the system?</p>
            <p>
              -The time it takes for grades to be updated in the system can
              vary. Typically, instructors aim to submit grades promptly after
              assessments are completed. However, factors such as the size of
              the class and administrative processes can affect the timeline
            </p>
          </div>
          <div className="my-5">
            <p>Are missing grade reports a common issue?</p>
            <p>
              -While not extremely common, missing grade reports can occur due
              to various reasons such as administrative errors, technical
              glitches, or delays in processing. Reporting the issue promptly
              helps in resolving it efficiently.
            </p>
          </div>
          <div className="my-5">
            <p>
              What steps can I take to prevent future issues with the missing
              grade report system?
            </p>
            <p>
              To avoid potential problems with the missing grade report system,
              make sure to keep track of your assignments, exams, and any other
              graded activities. Communicate regularly with your instructors to
              ensure that you are aware of your performance in the course.
              Additionally, familiarize yourself with the institution's policies
              on grade reporting and follow up promptly if you notice any
              discrepancies or delays in the reporting process.
            </p>
          </div>
          <div className="my-5">
            <p>How will I be notified once my missing grades are resolved?</p>
            <p>
              You will receive notifications through the system regarding the
              status of your missing grades. Updates will be provided as the
              issue is being addressed
            </p>
          </div>
        </div>
        <div className="bg-gray-800 w-full py-20 px-10 border-l-2 ">
          <div className="mt-28">
            <p className="text-4xl text-white font-bold text-center">
              Contact Us
            </p>
            <form>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semi-bold mb-2"
                  htmlFor="">
                  Your Name
                </label>
                <input
                  placeholder="Akua Amuah"
                  className="w-3/5 px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semi-bold mb-2"
                  htmlFor="">
                  Your Email
                </label>
                <input
                  placeholder="Ella@example.com"
                  className="w-3/5 px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semi-bold mb-2"
                  htmlFor="">
                  Your Message
                </label>
                <textarea
                  placeholder=""
                  className="w-3/5 px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-400"
                  type="text"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-teal-400 text-white font-semibold px-4 py-2 rounded-lg  focus:outline-white hover:bg-teal-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
