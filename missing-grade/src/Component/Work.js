import React from "react";


const Work = () => {
  const workInfoData = [
    {
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
    
        <h1 className="primary-heading">Overview</h1>
        <p className="primary-text">
         This website offers academic transparency for students and educators. Users log in to view a dashboard summarizing academic progress, while the system identifies and notifies about missing grades. Detailed reports highlight discrepancies, prompting direct communication through the platform. The website tracks and timestamps the resolution process, with administrative tools for oversight. Emphasizing accessibility and security, the platform serves as a centralized hub, streamlining the identification and resolution of missing grades in educational institutions.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;