import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <section className='bob'>
       <div className="container">
        <h1>Connect With Us</h1>
        <p>We would love to respond to your quesries and help you succeed.<br/> Feel free to get in touch with us.</p>
        <div className="contact-box">
            <div className="contact-left">
                <h3>Sent your request</h3>
                <form>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder='Enter Name'/>
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" placeholder='Enter Phone Number'/>
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder='Enter Email'/>
                        </div>
                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" placeholder='Subject'/>
                        </div>
                    </div>

                    <label>Message</label>
                    <textarea rows="10" placeholder='Your Message'></textarea>
                    <button type='submit'>SEND</button>
                </form>
            </div>
            <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
                <tr>
                    <td>Email</td>
                    <td>contactus@gmail.com</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>+233 00 000 0000</td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td>#212, Ground floor, 7th cross<br/>
                    Some Layout, Some Road, Budumbura<br/>
                    Bubuashi, 5990778
                    </td>
                </tr>
            </table>
            </div>
        </div>
       </div>
    </section>
  );
};

export default contact;