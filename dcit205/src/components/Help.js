import React from 'react';
import Navbar from './Navbar';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Help = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="block faqPage">
            <div className="container">
                <h2>FAQ</h2>
                <Collapse accordion defaultActiveKey={['1']}>
                    <Panel header="What is the Missing Grade Reporting System?" key="1">
                        <p>
                            The Missing Grade Reporting System is an innovative platform designed to assist students in tracking and reporting grades that may have been inadvertently omitted from their academic records. It provides a user-friendly interface that empowers students to view their current grades, report any missing grades, and communicate with instructors or academic administration effortlessly.                            
                        </p>
                    </Panel>                    
                    <Panel header="How can I report a missing grade?" key="2">
                        <p>
                            To report a missing grade, navigate to the "Missing Grade Form" page and fill out the required fields, including the course name, instructor's name, expected grade, and an explanation for the missing grade. Click the submit button, and a confirmation message will be displayed. Please note that this process is a simulation, and no real submissions are made
                        </p>
                    </Panel>
                    <Panel header="Can I filter my grades by semester or academic year?" key="3">
                        <p>
                            Yes, the system allows you to filter your grades based on the semester or academic year. The "Grade Report" page provides a detailed view of all your courses and respective grades, with an option to filter results based on specific semesters or academic years for a more organized overview.
                        </p>
                    </Panel>
                    <Panel header="How do I contact my instructors?" key="4">
                        <p>
                            The "Instructor Contact" page lists all your instructors along with their contact details. You can easily send a simulated email to your instructor by using the provided option. Please note that this is a mock-up feature, and no real emails are sent.
                        </p>
                    </Panel>
                    <Panel header="Is the system secure?" key="5">
                        <p>
                            Yes, the system prioritizes the security and privacy of student data. The login page features a secure form requiring a student ID and PIN for authentication. However, it's essential to note that this system is a mock-up, and no real back-end processes are involved in the authentication simulation.
                        </p>
                    </Panel>
                    <Panel header="Where can I find technical support?" key="6">
                        <p>
                            For technical support, visit the "Help and Support" page, where you'll find a contact form. Fill out the form with your query, and our simulated technical support team will provide assistance. This is a mock-up contact form, and no real support services are offered
                        </p>
                    </Panel>
                    <Panel header="How often is the system updated with new grades?" key="7">
                        <p>
                            The system is designed to sync with academic databases regularly, ensuring that your grades are up-to-date. However, please be aware that the frequency of updates may vary depending on the institution's data refresh cycles.
                        </p>
                    </Panel>
                    <Panel header="Can I view historical grade data from previous academic years?" key="8">
                        <p>
                            Yes, the system provides a comprehensive overview of your academic history. The "Grade Report" page allows you to filter and view grades from past academic years, offering a holistic perspective on your educational journey.
                        </p>
                    </Panel>
                    <Panel header="What happens after I submit a missing grade report?" key="9">
                        <p>
                            When you submit a missing grade report, you'll receive a confirmation message acknowledging the submission. Please note that this is a simulation, and no real notifications are sent. In a real-world scenario, your report would be forwarded to the appropriate administrative channels for resolution.
                        </p>
                    </Panel>
                    <Panel header="How are missing grades communicated to instructors?" key="10">
                        <p>
                            In our simulated environment, missing grades are not directly communicated to instructors. This feature is designed to encourage students to reach out to instructors independently. For a real-world application, a notification system would be implemented to inform instructors of reported missing grades.
                        </p>
                    </Panel>
                    <Panel header="Is the system accessible on mobile devices?" key="11">
                        <p>
                            Yes, the website is responsive and designed to be accessible on various devices, including desktops, tablets, and smartphones. Whether you're at home or on the go, you can conveniently access the Missing Grade Reporting System.
                        </p>
                    </Panel>
                    <Panel header="What do I do if I encounter technical issues with the platform?" key="12">
                        <p>
                            If you experience technical difficulties while using the platform, head to the "Help and Support" page. Our simulated technical support contact form is available for you to submit queries and receive assistance. Remember, this is a mock-up, and no real technical support services are provided.
                        </p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    </div>
  )
}

export default Help
