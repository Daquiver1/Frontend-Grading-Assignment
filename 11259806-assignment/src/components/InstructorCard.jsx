// UserCard.js
import React from 'react';
import { data1 } from '../data/data';

const InstructorCard = ({ name, email, phone, onEmailClick,index }) => {
  const avatarUrl = `https://i.pravatar.cc/150?u=${email}`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-40 object-cover" src={avatarUrl} alt={`${name}'s avatar`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-gray-700 text-base">
           {data1[index].courseCode}
        </p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => onEmailClick(email, name)}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;
