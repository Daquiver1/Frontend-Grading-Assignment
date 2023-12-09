import React, { useState, useEffect } from 'react';
import LoginPagebg from '../images/bg-login.jpg'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay(new Date().getDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDaysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      days.push(i);
    }

    return days;
  };

  const daysInMonth = getDaysInMonth(currentMonth);

  return (
    <div className="calendar bg-white p-4 rounded shadow bg-cover bg-center" style={{ backgroundImage: `url(${LoginPagebg})` }}>
      <div className="month-header mb-4">
        <h2 className="text-xl font-bold mb-2">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      </div>

      <div className="flex text-sm font-semibold mb-2 pl-16" style ={{width: '60%'}}>
        <div className="day text-center mr-32">Sun</div>
        <div className="day text-center mr-32">Mon</div>
        <div className="day text-center mr-32">Tue</div>
        <div className="day text-center mr-32">Wed</div>
        <div className="day text-center mr-32 ml-6">Thu</div>
        <div className="day text-center mr-32">Fri</div>
        <div className="day text-center mr-20">Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-6">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`day-cell text-center p-2 ${
              day === currentDay ? 'bg-cyan-500 text-white rounded-full' : 'hover:bg-gray-200'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
