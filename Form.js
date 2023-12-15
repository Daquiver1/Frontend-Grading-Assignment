import './CSS/form.css'

const Form  = () => {
    return (
        <div className="forma">
            <h1>MISPLACED ASSESSMENT FORM</h1>
            <form action="POST">
                <label htmlFor="courseName">Course: </label>
                <input type="text" className="courseName" placeholder="eg:PHIL223"/>
                
                <label htmlFor="instructorName">Name of lecturer: </label>
                <input type="text" className="instructorName"  list="instructorName" required/>
                 
                 <datalist id="instructorName">
                    <option value="Mr. Kofi"></option>
                    <option value="Mrs. Afia"></option>
                    <option value="Mr. Kwame"></option>
                    <option value="Mr. Adzorlolo"></option>
                    <option value="Mr. Michael Blackson"></option>
                    <option value="Mrs. Will Smith"></option>
                    <option value="Mr. Scoobe Parker"></option>

                 </datalist>

                 <label htmlFor="expectedGrade">Anticipated mark: </label>
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

                 <textarea name="explanation" className="explanation" cols="20" rows="15" placeholder="Why do you think your grade is missing?"></textarea>
                 <input type="submit" className='submitq'/>

            </form>
        </div>
      );
}
 
export default Form ;