import "../css/index.css"
import Hearder from "./Hearder"

const Fqas = () => {
  return (
   <>
    <Hearder />
  
    <div className="log">
     <div className="password-pic">
    <img src="src/images/sss.jpg" alt=""/>
    </div> 
    <div className="login-container">
      <form className="loginn-form" >
        <h2>Contact us for Support.</h2>
        <label htmlFor="username">Full name:</label>
        <input
          type="text"
          id="username"
          placeholder=""
          // value={username}
          // onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label htmlFor="password">Phone:</label>
        <input
          type="password"
          placeholder=""
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />
          <label htmlFor="email">Email:</label>
        <input
          type="emai"
          placeholder=""
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

<label htmlFor="message">Message:</label>
        <textarea
          type="message"
          placeholder="Let us know how we can help you..."
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
        {/* <p>Don&apos;t have an account? <a href="/Signup">Sign up</a></p> */}
      </form>
    </div>
    </div>

   
    {/* <h1 className="questions">Do you have Questions?</h1> */}
    <div className="contain" >
  
    {/* <img src="src/images/FAQ-2.jpeg" alt="" /> */}
  
    <div className="card">
      <div className="frequently">

        <h3 className="">1.How do I report a missing grade?</h3>
        <details>
          <p className="">To report a missing grade, log in to the student portal and navigate to the Missing Grade Report section. Follow the prompts to select the relevant course, semester, and provide a brief description of the missing grade issue.</p>
      
        </details>
      </div>
      </div>
      <div className="card">
      <div className="frequently">
        <h3 className="">2.What information is required when submitting a missing grade report?</h3>
        <details>
          <p className="">When submitting a missing grade report, ensure you include details such as the course name, course code, semester, your student ID, and provide a clear description of the issue you are facing with the missing grade.</p>

        </details>
      </div>
      </div>
      <div className="card">
      <div className="frequently">
        <h3 className="">3.Can I report a missing grade for any course?</h3>
        <details>
          <p className="">Yes, you can report a missing grade for any course in which you believe there is an issue with the grade assignment.</p>

        </details>
      </div>
      </div>
            
                
      <div className="card">
      <div className="frequently">
        <h3 className="">4.How long does it take to process a missing grade report?</h3>
        <details>
          <p className="">We aim to process missing grade reports within [2] business days. However, processing times may vary depending on the complexity of the issue and the current volume of reports.</p>

        </details>
      </div>
      </div>
    

      {/* <div className="frequently">
        <h3 className="">5.What happens after I submit a missing grade report?</h3>
        <details>
          <p className="">After you submit a missing grade report, it will undergo a review process. You will receive email notifications regarding the status of your report and any actions taken to resolve the issue.</p>
        </details>
      </div> */}



    </div>
   </>
)
}

  


export default Fqas