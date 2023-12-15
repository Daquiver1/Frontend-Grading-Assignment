import Nav from './Nav';


const Contact = () => {
    const handleClick = () => {
        console.log("Submitted");
    }

    return (
        <>
            <Nav />
            <main className="contact-instructor-body">
                <div className="contact-instructor-container">
                    <h1>Contact An Instructor</h1>
                    <form >
                        <div className="contact-instructor-input-box">
                            <input type="text" placeholder="Name of Instructor" />
                            <input type="text" placeholder="Instructor's Email" />
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Message..."/>
                            <button type="submit" onClick={handleClick}>Submit</button>  
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Contact