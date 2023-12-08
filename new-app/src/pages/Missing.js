import grade from './grade.jpg';
import show from './show';
const Missing = () =>{
    return(
        <>
        <br></br>
        <br></br>
        <div style={{display:"flex",marginLeft:"500px",flex:"100%",justifyItems:"center",alignContent:"center",alignItems:"center"}}>
            <br></br>
            <br></br>
            <div>
               <form style={{border:"solid",borderColor:"#BD9C6C",width:"550px", alignSelf:"center",verticalAlign:"Top",textAlign:"center",}}>
                     <h2>Missing Grade Form</h2>
                     <img src={grade} alt="examples of grades"style={{width:100}}></img>
                
                     <label>Course code:&nbsp;&nbsp;<input type="text" placeholder="Course code" ></input></label><br></br>
                     <br></br>
                     <label>Instructor name: <input type="text" placeholder="Instructor" ></input></label><br></br>
                     <br></br>
                     <label>Expextected Grade:<input type="text" placeholder="A,B+,B,.." maxLength={2}></input></label><br></br>
                     <br></br>
                     <label>Explanation&nbsp;&nbsp;&nbsp;&nbsp;:<input type="textbox" placeholder="Explain "></input></label><br></br>
                     <br></br>
                     <button onClick={show} style={{backgroundColor:"#BD9C6C",color:"#fff",borderColor:"#BD9C6C"}}>Submit</button>
               </form>
            </div>
        </div>
        </>
    )
}
export default Missing