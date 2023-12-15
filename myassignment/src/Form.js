import './CSS/form.css'

const Form  = () => {
    return (
        <div className="forma">
            <h1>Missing grade form page</h1>
            <form action="POST">
                <label htmlFor="courseName">course name: </label>
                <input type="text" className="courseName" placeholder="eg: DCIT205"/>
                
                <label htmlFor="instructorName">Name of instructor: </label>
                <input type="text" className="instructorName"  list="instructorName"/>
                 
                 <datalist id="instructorName">
                    <option value="Mr. Soli"></option>
                    <option value="Mrs. Kudogah Esinam"></option>
                    <option value="Mr. Peter Koame"></option>
                    <option value="Mr. Prince Nutakor"></option>
                    <option value="Mr. Edward Sefakae"></option>
                    <option value="Mrs. Beatrice Anim"></option>
                    <option value="Mr. Charles Forson"></option>

                 </datalist>

                 <label htmlFor="expectedGrade">Expected Grade: </label>
                <input type="text" className="expectedGrade"  list="expectedGrade"/>

                <datalist id="expectedGrade">
                    <option value="A"></option>
                    <option value="B+"></option>
                    <option value="B"></option>
                    <option value="C+"></option>
                    <option value="C"></option>
                    <option value="D+"></option>
                    <option value="D"></option>
                    <option value="E"></option>
                    <option value="F"></option>
                    
                </datalist>

                 <textarea name="explanation" className="explanation" cols="20" rows="10" placeholder="What is your explanation?"></textarea>
                 <input type="submit" className='submitq'/>

            </form>
        </div>
      );
}
 
export default Form ;