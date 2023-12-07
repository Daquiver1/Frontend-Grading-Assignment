const Form = () => {
    return ( 
        <div className="">
        <div className="">
            <h2 className='uppercase text-2xl font-bold'>Missing grade report</h2>
        </div>
        {/* form */}

        <div className="">
            <form >
            
                {/* student details */}
                <div className="">
                    {/* title */}
                <div className="">
                    <h2>student information</h2>
                </div>
                <div className="">

                    <div className="">
                    <label htmlFor="fname">Full Name:</label>
                    <input type="text" name="fname"  />
                    </div>
                    <div className="">
                        <label htmlFor="stdid">Student ID:</label>
                        <input type="text" name="stdid" />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="">
                        <label htmlFor="pnumber">Phone Number:</label>
                        <input type="text" name="pnumber"/>
                    </div>
                        </div>
                </div>

                {/* course information */}
                <div className="">
                    {/* title */}
                <div className="">
                    <h2>Course Information:</h2>
                </div>
                <div className="">

                    <div className="">
                    <label htmlFor="cname">Course Name:</label>
                    <input type="text" name="cname"  />
                    </div>
                    <div className="">
                        <label htmlFor="ccode">Course Code:</label>
                        <input type="text" name="ccode" />
                    </div>
                    <div className="">
                        <label htmlFor="iname">Instructor's Name:</label>
                        <input type="text" name="iname"/>
                    </div>
                    <div className="">
                        <label htmlFor="sem">Term / Semester:</label>
                        <input type="text" name="sem"/>
                    </div>
                    <div className="">
                        <label htmlFor="year">Year:</label>
                        <input type="text" name="year"/>
                    </div>
                    </div>
                </div>

                    {/* details of the missing grade */}
                    <div className="">
                    {/* title */}
                <div className="">
                    <h2>Details of the Missing Grade</h2>
                </div>
                <div className="">

                    <div className="">
                    <label htmlFor="Aname">Assignment/Exam/Project Name:</label>
                    <input type="text" name="Aname"  />
                    </div>
                    <div className="">
                        <label htmlFor="ddate">Due Date:</label>
                        <input type="text" name="ddate" />
                    </div>
                    <div className="">
                        <label htmlFor="dsub">Date Submitted (if applicable):</label>
                        <input type="text" name="dsub"/>
                    </div>
                    <div className="">
                        <label htmlFor="exp">Grade Expected:</label>
                        <input type="text" name="exp"/>
                    </div>
                        </div>
                </div>

                {/* description of issue */}
                <div className="">
                    <h2>Description of the Issue</h2>
                    <div className="">
                        <textarea name="issue"  cols="30" rows="10"> Please provide a detailed explanation of the issue and any steps you have taken to resolve it.</textarea>
                    </div>
                </div>

                <div className="">
                    <h2><label htmlFor="sdoc">
                        Supporting Documents
                    </label></h2>
                    <p>
                    Attach any relevant documents such as screenshots, email correspondence, or submission receipts</p>
                    <input type="file" name="sdoc" id="" />
                </div>
               {/* submit */}

            <div className="">
                <input type="submit" value="Submit" />
            </div>
            </form>
        </div>

        </div>
     );
}
 
export default Form;