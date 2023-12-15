import Accordion from 'react-bootstrap/Accordion';
import {Container, Row, Col, Card, ProgressBar} from 'react-bootstrap';


const HelpAndSupport = () => {
  
  
  return (
    
      <div className="help">
        <h2>Help And Support</h2><br />
        <h3>FAQs</h3>
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Why are some of my courses not showing?</Accordion.Header>
      <Accordion.Body>
      If you recently added a course, it may take 24 to 48 hours to appear.
      If after 2 days, you still face this issue, you may contact the
      lecturer in charge.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>I forgot my pin. How do I retrieve it?</Accordion.Header>
      <Accordion.Body>
      Go to the Login page, type in your I.D and click on forgot password.
     Confirm your email and wait for a link to reset password.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>What to do if I dont receive my new pin</Accordion.Header>
      <Accordion.Body>
      Contact help desk at (https://bit.ly/2XpJehN)
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>How do I reach support?</Accordion.Header>
      <Accordion.Body>
      Please fill the form at the bottom of the page.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>How to report a wrong grade?</Accordion.Header>
      <Accordion.Body>
      Go to the contact page, select the lecturer responsible and file your
      complaint.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>Who can use this website?</Accordion.Header>
      <Accordion.Body>
      Any student whose school is registered on the website.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="6">
      <Accordion.Header>What do I need to sign in</Accordion.Header>
      <Accordion.Body>
      You should sign in with your student identificaion number and pin.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  
  
  </div>
  
  );
 
};

export default HelpAndSupport;
