const Form = ({Submits}) => {
    return ( 
        <div className="pt-20 flex justify-center items-center ">
         <div className=" pl-4">
            <div className="">
            <h2 className='uppercase text-4xl text-center font-bold text-[#f39c12] pb-4'>Missing grade report</h2>
        </div>
        {/* form */}

        <div className="shadow-xl pl-4">
            <form onSubmit={()=>Submits(true)}>
            
                {/* student details */}
                <div className="">
                    {/* title */}
                <div className="font-semibold uppercase pb-2">
                    <h2>student information</h2>
                </div>
                <div className="pl-4 space-y-1">

                    <div className="flex gap-x-2 ">
                    <label htmlFor="fname">Full Name:</label>
                    <input type="text" name="fname" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent'  />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="stdid">Student ID:</label>
                        <input type="text" name="stdid" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent'  />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="pnumber">Phone Number:</label>
                        <input type="text" name="pnumber" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                        </div>
                </div>

                {/* course information */}
                <div className="">
                    {/* title */}
                <div className="font-semibold uppercase pb-2 pt-4">
                    <h2>Course Information:</h2>
                </div>
                <div className="pl-4 space-y-1">

                    <div className="flex gap-x-2">
                    <label htmlFor="cname">Course Name:</label>
                    <input type="text" name="cname" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent'   />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="ccode">Course Code:</label>
                        <input type="text" name="ccode" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="iname">Instructor's Name:</label>
                        <input type="text" name="iname" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="sem">Term / Semester:</label>
                        <input type="text" name="sem" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="year">Year:</label>
                        <input type="text" name="year" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    </div>
                </div>

                    {/* details of the missing grade */}
                    <div className="">
                    {/* title */}
                <div className="font-semibold uppercase pb-2 pt-4">
                    <h2>Details of the Missing Grade</h2>
                </div>
                <div className="pl-4 space-y-1">

                    <div className="flex gap-x-2">
                    <label htmlFor="Aname">Assignment/Exam/Project Name:</label>
                    <input type="text" name="Aname" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent'  />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="ddate">Due Date:</label>
                        <input type="text" name="ddate" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent'  />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="dsub">Date Submitted (if applicable):</label>
                        <input type="text" name="dsub" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                    <div className="flex gap-x-2">
                        <label htmlFor="exp">Grade Expected:</label>
                        <input type="text"  name="exp" className='outline-none border-2 w-[60%] focus:border-[#f39c12] ease-in duration-500 bg-transparent' />
                    </div>
                        </div>
                </div>

                {/* description of issue */}
                <div className="">
                    <h2 className="font-semibold uppercase pb-2 pt-4">Description of the Issue</h2>
                    <div className="font-medium pl-4 space-y-1">
                        <textarea name="issue"  cols="70" rows="5"   placeholder='Please provide a detailed explanation of the issue and any steps you have taken to resolve it.' className='outline-none rounded-xl focus:border-[#f39c12] border-2 ease-in duration-500'> </textarea>
                    </div>
                </div>

                <div >
                    <h2 className="font-semibold uppercase pb-2 pt-4"><label htmlFor="sdoc">
                        Supporting Documents
                    </label></h2>
                    <p className=" pl-4 space-y-1">
                    Attach any relevant documents such as screenshots, email correspondence, or submission receipts</p>
                    <input type="file" name="sdoc" className='border-2 rounded' />
                </div>
               {/* submit */}

                <div className="pb-2 mb-4 flex w-full items-center justify-center">
                <div className="bg-[#f39c12] my-2 rounded py-1 w-[7rem] px-6">
                <input type="submit" value="Submit" className='text-white uppercase font-semibold' />
            </div>
                </div>
            </form>
        </div>

            </div>
        </div>
     );
}
 
export default Form;