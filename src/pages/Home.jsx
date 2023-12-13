import { Link } from "react-router-dom";

export default function Homepage(){
    return (
        <div className="homepage">
            <div className="top-banner">
                <button className="new">This's new</button>
                <p className="top-banner-p">Read more </p>
            </div>

            <div className="text-wrapper">
                <h1>
                    Are you sceptical about your grades?
                </h1>
                <p>This platform helps students view their academic records and sumbit a formal complaint is they are not satisfied with theri grades </p>
                <Link to={"/sign-in"} className="new">Sign in</Link>
            </div>
            
        </div>
    )
    
}

