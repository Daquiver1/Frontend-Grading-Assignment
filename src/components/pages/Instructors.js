import React from "react";
import InstructorCard from "../InstructorCard";

const Instructors = () => {
  const instructors = [
    {
      name: "Dr. Vanessa",
      email: "ygaidoo@gmail.com",
      mobile: "+233 54 123 4567",
      picture: "https://th.bing.com/th/id/R.febb4ae0d513b08478ea962dcb09e90b?rik=fnlfgLSss7SQlw&pid=ImgRaw&r=0",
    },
    {
        name: "Dr. Paa Kwesi Aidoo",
        email: "paakwesiaidoo@gmail.com",
        mobile: "+233 54 123 4567",
        picture: "https://th.bing.com/th/id/OIP.ZJkCyaDTJyofL3pPEAwfNAAAAA?rs=1&pid=ImgDetMain",
      },
      {
        name: "Dr. Asamoah",
        email: "joeaidooooo@gmail.com",
        mobile: "+233 54 123 4567",
        picture: "https://picsum.photos/50/50",
      },
    
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.name} {...instructor} />
      ))}
    </div>
  );
};

export default Instructors;
