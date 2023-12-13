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
       <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl text-blue-700">Login</h1>
        <form action="" onSubmit={handleSubmit}>

            <label className="flex flex-col font-semibold " htmlFor="email">Email</label>
            <input type="email" value={email}  onChange={(e) =>
            setEmail(e.target.value)} placeholder="Enter your email" id="email" name="email"/>

            <label className="flex flex-col" htmlFor="password">Password</label>
            <input type="password" value={pass} onChange={(e) =>
            setPass(e.target.value)} placeholder="*****" id="password" name="password"/>

            <button  type="submit" className="bg-blue-700 text-white font-semibold rounded p-[8px] w-20 hover:bg-yellow-500 hover:text-blue-700 duration-75">Login</button>


        </form>
       </div>
       
       </>
    );
}
export default Access;