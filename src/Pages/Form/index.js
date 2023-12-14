import { Typography , Space} from "antd";
import './Form.css'
import AppHeader from '../../components/AppHeader';
import PageContent from '../../components/PageContent';
import SideMenu from '../../components/SideMenu';
import AppFooter from "../../components/AppFooter";

function Form(){
    return (
        <div className="App">
        <AppHeader />
        <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <div>
        <Space direction="vertical">
            <Typography.Text variant='h1'>
                <h3>Missing Grade Form</h3>
            </Typography.Text>

            <Space direction="horizontal">
                <Space direction="horizontal">
                    <GradeForm />
                </Space>
        </Space>
        </Space>
        </div>
        </Space>
        <AppFooter />
        </div>
    );
}

const GradeForm = () =>{
    return (
        <section>
            <div className="containerr">
                <h2>Report A Missing Grade</h2>
                <form>
                    <label>Course Name:</label>
                    <input type="text" name="course" placeholder="Course Name" required/>
                    <label>Instructor's Name:</label>
                    <input type="text" name="instructor" placeholder="Instructor's Name" required/>
                    <label>Expected Grade:</label>
                    <input type="text" name="grade" placeholder="Grade" required/>
                    <label>Explanation:</label>
                    <textarea name="explanation" placeholder="Explanation Here..." cols='60' rows='8' required/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Form;