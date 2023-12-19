import React, { Component } from 'react';
import './Report.css';
import Navbar from './Navbar'
import Footer from './footer'

class Report extends Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      grade: '',
      email: '',
      description: '',
    };
 }

 handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
 }

 handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here
 }

 render() {
    return (
      <div>
        <Navbar/>
        <h1 className="h1-center">Missing Grade Report Card</h1>
        <form className="box" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Subject:
            <input type="text" name="subject" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Grade:
            <input type="text" name="grade" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Description of Error:
            <textarea name="description" onChange={this.handleChange} />
          </label>
          <br />
          <button className= "reportButton"type="submit">Submit</button>
        </form>
        <Footer/>
      </div>
    );
 }
}

export default Report;
