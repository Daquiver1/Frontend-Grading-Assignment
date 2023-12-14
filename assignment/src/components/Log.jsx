import {useState} from "react"

const Access = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return(
       <>
       <div> <h1 className="mt-[18px] text-center font-sans text-4xl font-bold text-blue-700">MISSING GRADE REPORT SYSTEM</h1>
</div>
       <div className="flex flex-col items-center py-5 h-screen bg-gradient-to-b from-blue-100 to to-blue-500">
        <h1 className="font-bold text-3xl text-blue-700 mb-10">Login Page</h1>
        <form action="" onSubmit={handleSubmit}>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="email">Student ID</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="number" value={email}  onChange={(e) =>
            setEmail(e.target.value)} placeholder="Enter your ID" id="number" name="number"/>

            <label className="flex flex-col font-sans font-semibold text-xl" htmlFor="password">Password</label>
            <input className="rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px]" type="password" value={pass} onChange={(e) =>
            setPass(e.target.value)} placeholder="**************" id="password" name="password"/>

            <button   type="submit" className="flex flex-col text-center  pl-10 w-[120px] bg-blue-700 text-white font-semibold rounded p-[8px] hover:bg-yellow-300 hover:text-blue-700 duration-75 mt-10 mb-0">Login</button>


        </form>
       </div>

      
       </>
    );
}
export default Access;