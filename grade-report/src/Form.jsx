import Nav from './Nav';
import Footer from './Footer';

const Form = () => {
    return (
        <>
        <Nav />
        <main className="missing-grade-body">
            <div className="missing-grade-container">
                <h1>Report Missing Grade</h1>
                <form >
                    <div className="missing-grade-input-box">
                        <input type="text" placeholder="Course Name" />
                        <input type="text" placeholder="Name of Instructor" />
                        <input type="text" placeholder="Expected Grade" />
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Enter explanation..."/>
                        <button type="submit">Submit</button>  
                    </div>
                </form>
            </div>
        </main>
        <Footer />
        </>
    
    )
}

export default Form