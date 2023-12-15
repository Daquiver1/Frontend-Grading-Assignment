import { useState } from "react"
import { Reallog } from "../Components/RealLog"
import '../Pagestyles/Login.css'
import { Homepage } from "./Homepage"
export const Login = () => {
    const[showlog , setshowLog] = useState(true)
    return(
        <>
         {showlog ? <Reallog setshowLog = {setshowLog}/> : <Homepage />} 
        </>
    )
}