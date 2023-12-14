import React from "react";
import { useState } from "react";

function QuestionBox({question, answer}) {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className=" cursor-pointer bg-gray-200 px-2 rounded-md border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-lg font-medium text-secondary">
          {question}
        </span>
        {isOpen ? (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="mt-4">
          <hr className=" border-2 border-gray-400" />
          <p className="text-base text-gray-500">
           {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuestionBox;
