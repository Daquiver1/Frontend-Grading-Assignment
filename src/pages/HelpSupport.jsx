import React, { useState } from 'react';

const help = () =>{
  
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true);
    };
  return (
    <div className="big-container">
        <div className="main-heading">
          <h1>Frequently Asked Questions</h1><hr/>
        </div>
        <div className="main-sub-section">
          <div>
            <label>What time should we expect the results?</label>
            <div className="mt-2">
              <select className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none ">
                <option>Second month after reopening</option>
              </select>
            </div>
          </div><hr/>

          <div>
            <label>Am I the only one who cannot see my grades?</label>
            <div className="mt-2">
              <select className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none ">
                <option>Hold on, everything would be up in due time.</option>
                <option>Currently experiencing some technical difficulties</option>
              </select>
            </div>
          </div><hr/>

          <div>
            <label>I don't think I deserve the grades I got</label>
            <div className="mt-2">
              <select className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none ">
                <option>Email the lecturers stating your problem</option>
              </select>
            </div>
          </div><hr/>

          <div>
            <label>How do we know if we qualify for the next level?</label>
            <div className="mt-2">
              <select className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none ">
                <option>An email would be sent to you, regarding the situation.</option>
              </select>
            </div>
          </div><hr/>

          <div>
            <label>What time should we expect the results?</label>
            <div className="mt-2">
              <select className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none ">
                <option>Second month after reopening</option>
              </select>
            </div>
          </div><hr/>
         

        </div>

        <div className="contact-form-container" >
        
            <h2 style={{textAlign: 'center', fontSize:'24px', color: '#555', marginTop: "10px"}}>Contact Us</h2>
            <form  onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="@stu.edu.gh" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Enter message here" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
</div>
          {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-green-600">Message has been sent successfully!</p>
          </div>
        </div>
      )}

        </div>
    
  );
}

export default help;