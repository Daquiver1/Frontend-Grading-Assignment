function Alert(){
    return (
       alert("Your complaint has been submitted. You will be notified when a resolution has been reached.")
    );
   }

const HelpSupport = () => {
    return ( 
        <div>
           <h1 className="text-center">Help and Support</h1>
           <h2 className="text-center"> Frequently Asked Questions</h2>
           
            <p>
            1. What is the common grade scale?
            The common grade scale summarizes the standard of achievement associated with each grade. The scale describes the depth of knowledge and understanding, and the range of skills that students working at that standard typically show.
                </p>

            <p>2. How do I know what standard each of the grades represents?
            The Board of Studies is gathering samples of the work of real students who have done some syllabus-based tasks and activities. These work samples are published on the Board’s Assessment Resource Centre website.
                </p>

            <p>3. How do I choose the right grade?
            Teachers weigh up the assessment information they have collected for each student up to that point in time. This information will come from both formal assessment activities and informal observations, and will be built up over time and in different situations.
                 </p>
            <p>4. What is the best way for teachers teaching the same stage to get a shared view of the standards for each subject?
            Discussions with colleagues about the common grade scale and the collection of work samples aligned to each grade on the Assessment Resource Centre website would be helpful.
            </p>

            <p>5. How do I report a college course I took during high school in Courses & Grades?
            This can be reported in the Courses & Grades form below.
            </p>

            <h1 className="text-center">Contact Form</h1>
                <p>If you're experiencing technical issues or have any other concerns, please fill out the form below. Our support team will get back to you as soon as possible.</p>
                <form>
                <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter name "/>
        </div>
            <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter student email"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Course</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter course "/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={Alert}>Submit</button>
        </form>
        </div>
     );
}
 
export default HelpSupport;