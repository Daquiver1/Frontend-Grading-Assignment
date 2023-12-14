// MissingGradeFormPage.tsx
import React, { useState } from 'react';

interface MissingGradeFormPageProps {
  onSubmit: (formData: MissingGradeFormData) => void;
}

interface MissingGradeFormData {
  courseName: string;
  instructorName: string;
  expectedGrade: string;
  explanation: string;
}

const MissingGradeFormPage: React.FC<MissingGradeFormPageProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<MissingGradeFormData>({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Submit Missing Grade Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeFormPage;
