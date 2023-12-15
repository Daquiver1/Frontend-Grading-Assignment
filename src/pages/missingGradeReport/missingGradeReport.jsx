import React from "react";

const MissingGradeReport = () => {
  return (
    <div className="overflow-hidden mb-20">
      <section className="relative block h-[10vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black bg-cover bg-center" />
      </section>

      <section className="mt-20">
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          {/* COMPONENT CODE */}
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a message <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Course Name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Instructor Name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="grades"
                  placeholder="Expected Grade*"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4">
                  Drop in our office
                </h1>
                <p className="text-gray-400">
                  Please visit our office if your course grades are missing. Get
                  personalised help, discuss your problems, and verify your
                  academic records. We're here to help you succeed. Join us
                  today to quickly and efficiently resolve missing grade
                  reports.
                </p>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Main Office</h2>
                    <p className="text-gray-400">
                      Left wing of the Registry, Close to the Great Hall.
                    </p>
                  </div>
                </div>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Call Us</h2>
                    <p className="text-gray-400">Tel: +233 302500395</p>
                    <p className="text-gray-400">Tel: +233 531100065</p>
                  </div>
                </div>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <i className="fab fa-facebook-f text-blue-900" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/enlighteneering-inc-"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <i className="fab fa-linkedin-in text-blue-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* COMPONENT CODE */}
        </div>
      </section>
    </div>
  );
};

export default MissingGradeReport;
