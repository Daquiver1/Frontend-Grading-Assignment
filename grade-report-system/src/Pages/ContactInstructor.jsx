import './ContactInstructor.css';


const ContactInstructor = () => {
    
    return ( 

        <div>
             
            <div className="Main-content">

               

            <div className="left-div">


            <p className="first">
            <span><strong>Name </strong></span>    <br />  Dr. Johnson Akaplo <br /> <br />
              <span><strong>Course </strong></span>  <br /> Home mechanics <br /> <br />
           <span><strong>Email </strong></span>    <br /> johakaplo@gmail.com
            </p>

<hr />

            <p className="second">
            <span><strong>Name </strong></span>    <br />  Mr. James Liton <br /> <br />
              <span><strong>Course </strong></span>  <br /> African Studies and Traditon <br /> <br />
           <span><strong>Email </strong></span>    <br /> litjmaes@gmail.com
            </p>


<hr />

<p className="third">
            <span><strong>Name </strong></span>    <br />  Mr. Samuel Zar <br /> <br />
              <span><strong>Course </strong></span>  <br /> Living Home Skills<br /> <br />
           <span><strong>Email </strong></span>    <br /> zarsammy@gmail.com
            </p>

            </div>
            
            
            <div className="right-div">

            <form className="OurForm" action="" method="">
                <h2>Contact Your Instructor</h2>

<label htmlFor="name">Name</label>
<input type="text" id="name" name="name" placeholder="Type your name"/>

<label htmlFor="email">Email</label>
<input type="text" id="email" name="email" placeholder="Type your email"/>

<label htmlFor="email">Recipient Email</label>
<input type="text" id="re email" name="re email" placeholder="Type your instructor's email"/>

<label htmlFor="Message">Message</label>
<textarea name="Message" id="Message" cols="30" rows="10" placeholder="Type your message..."></textarea>

<button type="submit">Send Message</button>


            </form>
            </div>
            </div>


            <footer className="Foot">
            <p>&copy; Copyright, Grade-Report-System &middot; 2023</p>
            </footer>
            </div>

     );
}
 
export default ContactInstructor;