import React, {props} from "react"
function UserName (props){
    
    return(<div className="user-name"><p>Welcome {props.name}</p></div>)
}
export default UserName