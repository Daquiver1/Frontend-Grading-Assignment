import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
 return (
    <div className="landing-page">
      <section>
        <h1>Welcome to Our Web Application!</h1>
        <p className="paragraph">Our web application is designed to provide you with an efficient way to deal with all your grading issues.
        Login in right now and begin to access our wonderful site!</p>
      <button> <a>Login</a> </button>
      </section>
     
      <div className="suggestion-form">
        <p>Hey! Found any Bugs in our site?</p>
        <p>Or Perhaps, you want to make a suggestion?</p>
        <h2>Give us your suggestions and feedback</h2>
        
        <section>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br/>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br/>
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea id="suggestion" name="suggestion" maxLength="300" />
          <button type="submit">Submit</button>
        </form>
        </section>
      </div>
    </div>
 )
}

export default LandingPage