
function Button(props){
    return(
        <button onClick={props.whenClicked} className={props.name} id={props.ID}>{props.elname}</button>
    );
}

export default Button;