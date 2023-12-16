import './Form.css'
import React, { useState } from 'react';
import drone from './images/drone.jpeg'
import Footer from './component/Footer';

interface MissingGradeFormProps {
  onSubmit: (formData: FormData) =>void; 
}

interface FormData {
  courseName: string;
  instructorName: string;
  expectedGrade: string;
  explanationField: string;
}

const MissingGradeForm: React.FC<MissingGradeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanationField: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
 
    <div className='divi'>
    <img className='drone-ug' src ={drone} alt='' />

   < div className='divi-two'>
    <form onSubmit={handleSubmit}>
      <label className='stuff'>
        Course Name:
        <input className='g'
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
        />
      </label>

      <label className='stuff'>
        Instructor Name:
        <input className='g'
          type="text"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
          required
        />
      </label>

      <label className='stuff'>
        Expected grade:
        <input className='g'
          type="text"
          name="expectedGrade"
          value={formData.expectedGrade}
          onChange={handleChange}
          required
        />
      </label>

      <label className='stuff'>
       Explanation Field:
        <textarea
          name="explanationfield"
          value={formData.explanationField}
          onChange={handleChange}
          required
        />
      </label>

      <button className='butt' type="submit">Submit</button>
    </form>
    <Footer />
    </div>
    </div>
    
  );
};

export default MissingGradeForm;