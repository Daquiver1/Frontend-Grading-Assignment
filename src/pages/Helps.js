import React from 'react'
import "../styles/Help.css"
function Help() {
  return (
   
<div >
       <div className='container'>
            <h1>Frequently Asked Questions?</h1>
            </div>
            <div className='container1'>
                <div className='tab'>
                    <input type='radio' name='acc' id='acc1'/>
                    <label for="acc1">
                        <h2>01</h2>
                        <h3> What is the Missing Grade Report Website?</h3>
                    </label>
                    <div className='content'>
                        <p>
                        The Missing Grade Report Website is a platform designed to help students and parents track missing assignments and grades.
                         It provides real-time updates and notifications about missing grades.
                        </p>
                    </div>
                </div>
                <div className='tab'>
                    <input type='radio' name='acc' id='acc2'/>
                    <label for="acc2">
                        <h2>02</h2>
                        <h3> How do I register on the website?</h3>
                    </label>
                    <div className='content'>
                        <p>
                        To register, click on the 'Start Here' button on the homepage.
                         You will need to provide some basic information such as your name, email address, and create a password.
                        </p>
                    </div>
                </div>
                <div className='tab'>
                    <input type='radio' name='acc' id='acc3'/>
                    <label for="acc3">
                        <h2>03</h2>
                        <h3> How do I report a missing grade?</h3>
                    </label>
                    <div className='content'>
                        <p>
                        To report a missing grade, navigate to the 'MissingGrade' section of the website. 
                        Fill in the necessary details about the course, assignment, and the expected grade, then click 'Submit'.
                        </p>
                    </div>
                </div>
                <div className='tab'>
                    <input type='radio' name='acc' id='acc4'/>
                    <label for="acc4">
                        <h2>04</h2>
                        <h3> What should I do if my grade is still missing after reporting?</h3>
                    </label>
                    <div className='content'>
                        <p>
                        If your grade is still missing after reporting, please contact your instructor directly.
                         If the issue persists, you can reach out to our support team through the 'Contact ' page.
                        </p>
                    </div>
                </div>
                <div className='tab'>
                    <input type='radio' name='acc' id='acc5'/>
                    <label for="acc5">
                        <h2>05</h2>
                        <h3>  Is my information secure?</h3>
                    </label>
                    <div className='content'>
                        <p>
                        Yes, your information is secure. 
                        We prioritize the privacy and security of our users.
                         All data is encrypted and stored securely.
                        </p>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <form>
                    <h1 className='con'>Contact Us</h1>
                    <input type='text' placeholder='Name'/>
                    <input type='email'placeholder='Email'/>
                    <textarea cols={30} rows={3} placeholder='Message'></textarea>
                    <button>Submit</button>
                </form>
            </div>

       





</div>
     
  )
}

export default Help
