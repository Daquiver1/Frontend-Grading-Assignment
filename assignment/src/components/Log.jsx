import {useState} from "react"
import {useNavigate} from "react-router-dom"

const Access = (props) =>{
    const [id,setID] = useState('');
    const [pass,setPass] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    

    const simulateLogin = async() => {
        const simulatedUserData = {
            validID:"11038553",
            validPassword:"Koalais54"
        };

        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(id===simulatedUserData.validID && pass ===simulatedUserData.validPassword) {
                    resolve({id});
                } else {
                    reject(new Error("Invalid credentials"));
                }
            },1000
            )
        }
        );
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const user = await simulateLogin();
            console.log("Logged in as:",user.id);
            setError("");
            navigate("/")
        } catch (error) {
            setError("Invalid credentials");
        }
    };

 

    return(
       <>
       <div> <h1 className="mt-[18px] text-center font-sans text-4xl font-bold text-blue-700">MISSING GRADE REPORT SYSTEM</h1>
</div>
       <div className="flex flex-col items-center py-5 h-screen bg-gradient-to-b from-blue-100 to to-blue-500">
        <h1 className="font-bold text-3xl text-blue-700 mb-10">Login Page</h1>
        {error && <p className="text-red-600">{error}</p>}
        <form action="" onSubmit={handleSubmit}>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="email">Student ID</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="number" value={id}  onChange={(e) =>
            setID(e.target.value)} placeholder="Enter your ID" id="number" name="number" required/>

            <label className="flex flex-col font-sans font-semibold text-xl" htmlFor="password">Password</label>
            <input className="rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px]" type="password" value={pass} onChange={(e) =>
            setPass(e.target.value)} placeholder="**************" id="password" name="password" required/>

            <button   type="submit" className="flex flex-col text-center  pl-10 w-[120px] bg-blue-700 text-white font-semibold rounded p-[8px] hover:bg-yellow-300 hover:text-blue-700 duration-75 mt-10 mb-0">Login</button>


        </form>
       </div>

      
       </>
    );
}
export default Access;