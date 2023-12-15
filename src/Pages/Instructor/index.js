import { Space, Table, Typography } from "antd";
import './Mail.css'
import AppHeader from '../../components/AppHeader';
import SideMenu from '../../components/SideMenu';
import AppFooter from "../../components/AppFooter";

function Instructor(){
    return (
        <div className="App">
        <AppHeader />
        <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <div>
        <Space direction="vertical">
            <Typography.Text variant="h1">
                <h3>Instructors</h3>
            </Typography.Text>
            <Space direction="horizontal">
                <Space direction="horizontal">
                    <InstructorTable />
                </Space>

                <Space>
                    <InstructorMail/>
                </Space>
            </Space>
        </Space>
        </div>
        </Space>
        <AppFooter />
        </div>
    );
}

const InstructorTable = () =>{
    return (
        <Table 
                        columns={[
                            {
                                title:'Instructor Name',
                                dataIndex:'name',
                            },
                            {
                                title:'Course',
                                dataIndex:'course',
                            },
                            {
                                title:'Phone Number',
                                dataIndex:'phone',
                            },
                            {
                                title:'Email Address',
                                dataIndex:'email',
                            },
                        ]}
                        dataSource={[
                            {name:'Math Instructor', course:'Mathematics', phone:'+233-344-343', email:'math.instruct@ug.edu.gh'},
                            {name:'Statistics Instructor', course:'Statistics', phone:'+233-563-992', email:'stat.instruct@ug.edu.gh'},
                            {name:'Programming Instructor', course:'Programming', phone:'+233-413-421', email:'prog.instruct@ug.eddu.gh'},
                            {name:'Software Instructor', course:'Software Engineering', phone:'+233-132-223', email:'software.instruct@ug.edu.gh'},
                        ]}
                    />
    )
                    };


const InstructorMail = () => {
    return (
        <section>
            <div className="container">
                <h1>Send a Mail</h1>
                <form>
                    <input type="text" placeholder="Full Name" name="name" required/>
                    <input type="text" placeholder="Index Number" name="id" required/>
                    <input type="email" placeholder="instructor's-email@ug.edu.gh" name="mail" required/>
                    <input type="Subject" placeholder="Mail Subject..." name="subject" required/>
                    <textarea placeholder="Message To instructor..." cols='60' rows='10' required></textarea>
                    <br/>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Instructor;