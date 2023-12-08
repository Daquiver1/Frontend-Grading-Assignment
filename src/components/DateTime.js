import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DateTime.css"; // Import your custom styles

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-time-container">
      <p>Welcome Fabrice Ihongui</p>
      <div className="date-time-box">
        <div className="icon">
          <FaClock />
        </div>
        <div className="text">
          <p>Time: {date.toLocaleTimeString()}</p>
          <p>Date: {date.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
