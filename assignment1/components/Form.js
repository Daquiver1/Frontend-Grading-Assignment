import Button from "./Button";
function Form() {
  return (
    <>
      <section className=" bg-slate-300  h-screen object-center m-4 ">
        <h2 className="text-center">Grade Form</h2>
        <form max-w-md space-y-4>
          <div className="flex-col  justify-between justify-items-center items-center ">
            <div>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                name="instructorName"
                className="mt-1 p-2 border rounded-md w-full text-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                name="expectedGrade"
                className="mt-1 p-2 border rounded-md w-full text-neutral-900"
              />
            </div>
            <div>
              <label htmlFor="explanation">Explanation:</label>
              <textarea
                id="explanation"
                name="explanation"
                className="mt-1 p-2 border rounded-md w-full text-neutral-900"
              />
            </div>

            <div>
              <Button text={"submit"} />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
