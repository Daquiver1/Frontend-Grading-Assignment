import React from "react";
import lexis from "./images/man2.jpg";
import david from "./images/man2.webp";
import charis from "./images/woman1.jpg";
import angela from "./images/woman2.jpg";

export const Instructor_Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="h-50 w-50 ">
            <img className="h-auto max-w-full rounded-[50%]" src={lexis} />
          </div>

          <div>
            <p>info</p>
          </div>
        </div>

        <div>
          <div className="h-50 w-50">
            <img className="h-auto max-w-full rounded-[50%]" src={david} />
          </div>
          <div>
            <p>info</p>
          </div>
        </div>
        <div>
          <div>
            <img src={charis} />
          </div>
          <div>
            <p>info</p>
          </div>
        </div>
        <div>
          <div>
            <img src={angela} />
          </div>
          <div>
            <p>info</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
