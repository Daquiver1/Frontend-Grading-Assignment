import { useState } from "react";

const MissingGrade = () => {
  const [instructor, setInstructor] = useState("");
  const [course, setCourse] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("The email address and password are " + instructor + " and " + course + " respectively.");
};
  return (
    <div className="">
      <div className="border-solid border-2 border-slate-600 rounded sm:w-[450px] w-[75%] min-w-[300px] mx-auto mt-[5%]">
            <h1 className="text-3xl py-3 text-center font-semibold">Missing Grade</h1>
            <hr className="bg-slate-700 mb-3 h-[2px]"/>
            <form action="" onSubmit={handleFormSubmit} className="flex flex-col w-[90%] mx-auto my-2">
                <input type="text" name="coursename" id="coursename" value={course} placeholder="Course Name" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 my-4 outline-none" onChange={(e) => setCourse(e.target.value)}/>
                <input type="text" name="lecturername" id="lecturername" value={instructor} placeholder="Lecturer Name" required className="bg-slate-200 text-slate-700 border-b-2 border-slate-400 outline-none" onChange={(e) => setInstructor(e.target.value)}/>
                <select name="grade" id="grade" className="py-1 my-2 border-solid border-slate-400 border-2 rounded outline-none">
                  <option value="" selected>Expected Grade</option>
                  <option value="">A</option>
                  <option value="">B+</option>
                  <option value="">B</option>
                  <option value="">C+</option>
                  <option value="">C</option>
                  <option value="">D+</option>
                  <option value="">D</option>
                  <option value="">E</option>
                  <option value="">F</option>
                </select>
                <textarea name="explanation" id="explanation" cols="20" rows="5" placeholder="Explanation" className="border-solid border-slate-400 border-2 rounded outline-none"></textarea>
                <input type="submit" value="Submit" className="cursor-pointer text-center border-solid border-2 border-slate-800 rounded-2xl bg-slate-700 text-white py-1 my-4 hover:bg-slate-400 hover:text-slate-700"/>
            </form>
        </div>
    </div>
  )
}

export default MissingGrade