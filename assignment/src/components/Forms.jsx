const GradeForm = () => {
    return ( 
        <>

<div className="flex flex-col items-center py-5  h-fit  bg-gradient-to-b from-white to to-blue-700">
        <h1 className="font-bold text-3xl text-blue-700 mb-10">Missing  Grade Form </h1>
        <form>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text"> Instructor's  Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="First Name" id="name" name="name" required/>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Instructor's Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="Last Name" id="name" name="name" required/>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Course Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="Course Name" id="course" name="course" required/>

            <label className="flex flex-col font-sans font-semibold text-xl" htmlFor="password">Course Code</label>
            <input className="rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px]" type="string"  placeholder="Course Code" id="course" name="course" required/>

            <label className=" mt-10 flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Issue Description</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-8 " type="text"    placeholder="Problem Description" id="problem" name="problem" required/>

            <button onClick={()=>(
               alert('Form submitted successfully')
            )}  type="submit" className="flex flex-col text-center  pl-10 w-[120px] bg-blue-400 text-white font-semibold rounded p-[8px] hover:bg-yellow-300 hover:text-blue-700 duration-75 mt-10 mb-0">Submit</button>


        </form>
       </div>

        </>
     );
}
 
export default GradeForm;