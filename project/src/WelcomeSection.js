import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './WelcomeSection.css';

const WelcomeSection = () => {
        return(
            <>
            <div className='center-container'> 
                <p className='text'>Welcome to the Student Self Service </p>
            </div>

            <div className='card-container'>
          
                <Card style={{ width: '18rem', marginRight: '20px' ,}}>
                        <img className='img' variant="top" src="Dashboard-image.png" />
                    <Card.Body>
                        <Card.Title>Dash Board</Card.Title>
                        <Card.Text>
                        Track your grades, Check for Missing grades.Access detailed insights into each subjects.
                        </Card.Text>
                        <Button variant="primary">View Dashboard</Button>
                    </Card.Body>
                </Card>
          
                 <Card style={{ width: '18rem', marginRight: '20px' }}>
                    <img className='img' variant="top" src="missing-form.png" />
                    <Card.Body>
                        <Card.Title>Missing grade form</Card.Title>
                        <Card.Text>
                        Report Missing grades to instructors.To ensure accuracy and transparency.
                        </Card.Text>
                        <Button variant="primary">Make a Report</Button>
                    </Card.Body>
                </Card>
            
                <Card style={{ width: '18rem', marginRight: '20px' }}>
                    <img className='img' variant="top" src="Help-and-support.jpg" />
                    <Card.Body>
                        <Card.Title>Help & Support</Card.Title>
                        <Card.Text>
                        Check out our FAQs or contact our support team for personalized assistance
                        </Card.Text>
                        <Button variant="primary">Contact us</Button>
                    </Card.Body>
                </Card>
           

            </div>
            </>
        )
}


export default WelcomeSection;