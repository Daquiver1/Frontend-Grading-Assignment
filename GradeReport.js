import { useState } from 'react';
import React from 'react';
import './GradeReport.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {

    const [formData, setFormData] = useState({
      username: 'enter student id',
      email: 'enter student pin',
      occupation: 'student',
      gender: 'male',
      languages: ['html'],
    })
  
    const onChangeHandler = (event) => {
  
      console.log(event)
      if (event.target.name === 'languages') {
  
        let copy = { ...formData }
  
        if (event.target.checked) {
          copy.languages.push(event.target.value)
        } else {
          copy.languages = copy.languages.filter(el => el !== event.target.value)
        }
  
        setFormData(copy)
  
      } else {
        setFormData(() => ({
          ...formData,
          [event.target.name]: event.target.value
        }))
      }
    }
  
    const onSubmitHandler = (event) => {
      event.preventDefault()
      console.log(formData)
    }
    return (
      <div className="App">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Student ID</label>
            <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">PIN</label>
            <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          </div>
          <div className="form-group">
            <label htmlFor="occupation" className="form-label">Academic Year/Semester</label>
            <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="other">19/20</option>
              <option value="student">20/21</option>
              <option value="employee">21/22</option>
              <option value="other">22/23</option>
              <option value="other">23/24</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div>
              <div>
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Courses</label>
            <div>
              <div>
                <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
                <label htmlFor="html">DCIT 201</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
                <label htmlFor="css">DCIT 203</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">DCIT 205</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">DCIT 207</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">MATH 223</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn" type="submit" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default App;
  