import React, { useState } from 'react';

const ReportGradePage = () => {
  const [formData, setFormData] = useState({
    course: '',
    grade: '',
    lecturer: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reporting Grade:', formData);
    setFormData({
      course: '',
      grade: '',
      lecturer: '',
      comment: '',
    });
  };

  const pageStyle = {
    backgroundImage: 'url("../images/im3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1 className="text-4xl font-bold mb-8">Report Missing Grade</h1>
      <form className="max-w-md w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-bold mb-2">
            Course:
          </label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="grade" className="block text-sm font-bold mb-2">
            Grade:
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lecturer" className="block text-sm font-bold mb-2">
            Lecturer's Name:
          </label>
          <input
            type="text"
            id="lecturer"
            name="lecturer"
            value={formData.lecturer}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-bold mb-2">
            Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="p-2 border border-gray-300 w-full h-20"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportGradePage;
