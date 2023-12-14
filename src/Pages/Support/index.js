import React, { useState } from "react";
import { Space, Typography } from "antd";
import Faq from "./Faq";
import './faq.css'
import Dash from "../final";

import AppHeader from '../../components/AppHeader';
import PageContent from '../../components/PageContent';
import SideMenu from '../../components/SideMenu';
import AppFooter from "../../components/AppFooter";

function Support(){

    const faqQuestions = [
        {
            question: "What is the best way to contact you?",
            answer: "You can contact us via email at...",
            open: true
        },
        {
            question: "Where are you located?",
            answer: "Opposite the Statistics and Mathematics Department",
            open: false
        },
        {
            question: "How do i reach my lecturer?",
            answer: "Using the Instructor contact page",
            open: false
        },
        {
            question: "How long does it take to get a response for a grade report?",
            answer: "That depends on the course, instructor and number of reports sent",
            open: false
        },
    ]

    const [selected, setSelected] = useState(null)

    function toggle(index) {
        if (selected == index){
            return setSelected(null)
        }

        setSelected(index)
    }

    const SupportForm = () => {
        return (
            <section  style={{paddingLeft: '250px'}}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <form>
                        <input type="text" placeholder="Full Name" name="name" required/>
                        <input type="text" placeholder="Index Number" name="id" required/>
                        <input type="Subject" placeholder="Enquiry Title/Category" name="subject" required/>
                        <textarea placeholder="Enquiry Content" cols='60' rows='10' required></textarea>
                        <br/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </section>
        )
    }

    return (
        <div className="App">
        <AppHeader />
        <Space className='SideMenuAndPageContent'>
        <SideMenu/>
        <div>
        <Space direction="vertical">
            <Typography.Text>
                <h3>Help and Support</h3>
            </Typography.Text>
            <Space direction="horizontal">
                <div className="faqs">
                    {faqQuestions.map((faq, index) => (
                        <div  key={index} onClick={()=>toggle(index)}>
                            <div className="faq-item">
                                <div className="title">
                                    <h2>{faq.question}</h2>
                                    <span>{selected === index ? '-' : '+'}</span>
                                </div>
                                {/* <div>
                                    {faqs === index ? (
                                        <span className="verticle">-</span>
                                    ) : (
                                        <span className="verticle">+</span>
                                    )}
                                </div> */}
                                <div className={selected === index ? 'content show' : 'content'}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            <Space direction="horizontal">
                <SupportForm/>
            </Space>
            </Space>
        </Space>
    </div>
        </Space>
        <AppFooter />
        </div>
    );
}

export default Support;