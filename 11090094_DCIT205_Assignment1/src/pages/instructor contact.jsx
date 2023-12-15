import React, { useState } from "react";
import FooterComponent from "../components/FooterComponent";
export const Instructor_Contact = () => {
  const [instructors] = useState([
    {
      id: 1,
      name: "David Berko",
      email: "davidberko@icloud.com",
    },
    {
      id: 2,
      name: "Charis Boateng",
      email: "charisboateng@icloud.com",
    },
    {
      id: 3,
      name: "Seth Baidoo",
      email: "sethBaidoo@icloud.com",
    },
    {
      id: 4,
      name: "Nyla Darko",
      email: "nylaDarko@gmail.com",
    },
    {
      id: 5,
      name: "Kofi Asare",
      email: "AsareKofi@gmail.com",
    },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(instructors[0]);
  const [emailContent, setEmailContent] = useState("");

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent("");
  };

  const handleSendEmail = () => {
    alert(`Email Sent to ${selectedInstructor.name}:\n${emailContent}`);
  };

  return (
    <>
      <div className="container mx-auto w-full h-screen mt-8">
        <h1 className="l font-bold my-20 md:text-5xl text-3xl">
          Instructor Contact Page
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="md:text-4xl font-semibold mb-4 text-2xl">
              Instructors
            </h2>
            <ul className="space-y-7 md:text-2xl text-xl">
              {instructors.map((instructor) => (
                <li
                  key={instructor.id}
                  className={`cursor-pointer ${
                    selectedInstructor?.id === instructor.id
                      ? "text-teal-500"
                      : ""
                  }`}
                  onClick={() => handleInstructorClick(instructor)}>
                  {instructor.name}
                </li>
              ))}
            </ul>
          </div>

          {selectedInstructor && (
            <div>
              <h2 className=" font-semibold mb-4 md:text-4xl text-2xl">
                Contact Details
              </h2>
              <div className="leading-10 text-xl">
                <p>Name: {selectedInstructor.name}</p>
                <p>Email: {selectedInstructor.email}</p>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Send Email</h2>
                <textarea
                  className="w-full border p-2 h-40"
                  placeholder="Enter your email content..."
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                />
                <button
                  className="mt-2 mb-2 px-4 py-2 bg-teal-500 text-white rounded-md"
                  onClick={handleSendEmail}>
                  Send Email
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-20">
          <FooterComponent />
        </div>
      </div>
    </>
  );
};
