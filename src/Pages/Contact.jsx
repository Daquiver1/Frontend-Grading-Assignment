import React from 'react'
import { Navbar, Nav, Container, Table, Card, Alert } from 'react-bootstrap';


const LecturerContact = () => {
  return (
    <div>
       <Navbar expand="lg" bg="success">
        <Container>
          <Navbar.Brand>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M84.751 50.867c-.282.018-5.562-.028-8.344.007-.599.669.599 1.232.494 2.043-3.028 1.091-4.472-1.62-5.563-3.556-.071-.493-.862-1.32-1.039-1.778l11.354.018.071-27.144-62.209-.07-.141.316v27.32l17.99.071c5.879 8.59 11.583 17.286 16.97 26.123l-2.289 1.267L35.85 51.121l-19.592-.017.053-33.675.528-.246h67.895l.017 33.684zM176.498 17.217l-.053 33.622-19.451.035c-7.463 11.266-14.857 22.532-22.566 33.728-1.021-.986-1.656-2.464-1.021-3.802 7.111-11.125 14.717-21.969 22.074-32.953h17.215l.529-.089V20.457l-65.607-.07c0 1.496-.035 25.26 0 27.461h12.869v.738c-2.641 3.592-4.367 7.535-6.83 11.162-.986-.212-3.592-.529-2.289-2.29l3.803-6.054-.494-.529h-9.893l-.527-.738-.07-32.953h71.82l.491.033z" fill="#8891b8"/><path d="M78.414 23.555v20.947c-.546 0-9.083 0-13.414.035.704 3.521 3.872 6.689 5.563 10.141C68.626 61.19 62.395 67 56.622 70.661 50.707 61.93 44.968 53.41 38.877 44.537c-5.316-.07-14.875-.035-16.283-.035l.053-20.489.774-.493H77.92l.494.035zM169.668 44.502c-1.084-.028-14.346 0-15.982.035-7.324 10.915-14.682 21.793-22.039 32.708-1.408-4.472-9.225.176-7.111-6.337-1.199-1.866-3.381-3.521-5.564-4.049-1.232-1.268-2.781-3.134-2.781-4.823 3.416-5.739 6.936-11.443 10.141-17.252l-15.455-.017V24.013l.492-.493h58.301v20.982h-.002z" fill="#1a3b73"/><path d="M88.553 61.542c1.971-1.127 4.049-1.938 6.337-2.289 6.371-1.408 12.955-.141 17.744 3.802 3.027 1.901 2.498 7.041 6.83 6.583 1.162.387 2.428 1.619 2.816 2.781 1.09 1.971-2.5 5.14 1.514 4.823 2.535-1.057 5.07.492 6.09 2.781.951 2.429 1.092 5.14 2.535 7.358 1.092 1.125-.105 3.168.986 4.294 2.43-1.478 2.604-4.153 4.084-5.808 2.676 2.076 3.133 5.069 3.52 8.097.74.95 1.443.281 2.289.774-.035 14.611-10.844 27.636-23.307 34.22-8.133 3.52-19.539 5.174-28.129 1.514-1.69-.246-2.712 1.197-4.049 1.76-5.634 2.43-13.132 3.204-18.518-.246-7.042-4.154-8.521-12.217-7.605-20.032l1.021-3.027c-4.964-8.309-10.773-16.266-15.737-24.574 1.337-4.366 6.055-5.95 9.4-8.133 2.112-.844 4.365-1.302 6.337-2.534-.845-.739-2.078-1.127-2.535-2.289 5.175-3.943 10.35-9.013 12.921-14.927 4.646-2.324 8.132 2.816 12.181 4.295.951.6 2.008.918 3.275.777z" fill="#1a3b73"/><path d="M85.279 64.323c3.274.282 5.914-2.465 9.365-2.535 5.069-.634 11.758-1.584 14.963 3.273.387 1.62-.494 2.888-1.797 3.557-.633.282-1.584.422-1.76 1.268l.492.528 11.16 1.268c1.479.387 1.443 2.183 1.021 3.274l-.773.774-16.725-.774c-.949.492-1.689 1.513-2.533 2.288-.389 2.323.387 4.4 2.287 5.562 2.008.177 3.908.74 6.092.529.809 2.394-1.127 4.471-3.062 5.808-1.164.599-2.5.81-3.557 1.796.949.844 2.711.528 3.803.247 8.096-1.832 14.504-11.513 23.588-7.113 1.936 1.479 1.619 4.226 1.268 6.337-2.887 8.204-13.941 1.938-19.504 6.337-7.992 6.479-11.268 16.195-20.033 22.322-3.873 3.062-8.661 4.646-13.942 3.556-3.661-.599-6.619-3.732-7.851-7.112-3.31-7.956 4.436-12.569 6.337-19.011.141-.775-.176-1.303-.774-1.76-1.021.176-.916 1.302-1.268 2.005-2.218 3.346-6.055 4.93-8.097 8.134-4.19-6.514-8.45-12.957-12.428-19.54-.387-2.535 2.604-3.45 4.049-4.787a33.567 33.567 0 0 1 8.625-3.063c-1.268 4.224-1.338 10.104 2.535 12.919.916-.915.106-2.393 0-3.52.035-6.056 3.098-11.301 8.379-14.716 2.746-1.198 5.386-2.677 8.591-2.781l.528-.775c-2.007-1.902-4.155-3.451-6.584-4.295-2.042 2.535-3.696 5.914-6.865 7.358-1.867.035-3.767.104-5.07-1.268 3.45-3.274 6.584-7.781 9.646-11.407 3.803.494 6.479 3.767 9.894 5.317z" fill="#fff"/><path d="M100.453 72.175c-2.605 1.759-3.908 4.858-3.273 7.851.809.669 1.268 1.479 1.76 2.288-1.443.598-2.817-.599-4.049-1.267-1.057-1.373-2.676-2.817-2.007-4.578 1.091-2.745 3.555-4.119 6.337-4.541.386.07.986-.212 1.232.247z" fill="#1a3b73"/><path d="M103.762 77.491c-.527.95-1.09 2.183-.492 3.309-.773.07-.281-.81-.773-1.021.245-.845.175-2.254 1.265-2.288zM114.148 78.019c-3.064.316-6.057 5.879-8.873 1.761-.598-1.338.986-1.409 1.516-2.043 2.535-.07 4.928.141 7.357.282zM117.951 78.265c-1.654 1.478-3.557 3.309-6.092 3.273 1.903-1.477 4.084-2.182 6.092-3.273zM121.752 79.004c-.211.81-.633 1.76-1.514 2.042h-1.76c.422-1.232 1.655-2.605 3.274-2.042zM137.982 93.967c-1.373.387-3.203.387-4.576 0 1.76-1.127 2.992-2.923 4.084-4.542.914.95.317 3.028.492 4.542zM139.004 96.502c-1.232 11.829-10.352 23.552-21.793 27.391-5.176 1.936-11.619.844-16.477-1.021-1.76 2.147-3.908 4.365-6.337 5.316 6.618-8.062 10.421-17.287 15.21-26.124 6.934-8.696 19.291-4.471 29.397-5.562z" fill="#fff"/><path d="M118.971 132.481c.74 1.797-.457 4.578 1.021 5.846h23.799l.035 37.229-60.342.018-33.446-.018v-37.494l22.813.018c.035-1.69 1.901-1.162 3.028-1.267 1.231 1.267-.212 2.71.246 4.294l-22.99-.052-.069.827v29.889l.527.529h87.417l-.035-30.665-24.82-.053.035-8.08c.775-.668 1.796-.773 2.781-1.021z" fill="#8891b8"/><path d="M112.635 134.278v10.121l.773.018h23.801l.527.158v24.381l-.527.034H56.656c-.035-.21.035-24.238 0-24.855l22.778.036c.528-2.288-.036-5.07.494-7.357 4.189-.036 7.745-1.62 11.16-3.556 6.584 1.83 14.611 2.392 21.547 1.02z" fill="#1a3b73"/></g></svg>

            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-1">
              <Nav.Link href="/" className="active">Home</Nav.Link>
              <Nav.Link href="/dashboard" >Dashboard</Nav.Link>
              <Nav.Link href="/grade" >Grade</Nav.Link>

              <Nav.Link href="/report">Report</Nav.Link>
              <Nav.Link href="/contact">Instructor's Contact</Nav.Link>
              <Nav.Link href="/help">FAQ & Support</Nav.Link>
              <Nav.Link href="/login">LogOut</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="ms-5">
      <h1 className='text-center text-success fw-bolder mt-5'>Instructor Contact</h1>
            <p className='fs-3'>Contact your instructor using the information below:</p>
            <div className="row">
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Michael Soli Agbo Tettey</p>
            <p><strong>Email:</strong> micheal.soli@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0593456893</p></li>
            </ul>
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Aziz Abdullai</p>
            <p><strong>Email:</strong> aziz423@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0205678940</p></li>
            </ul>
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Mark Atta Mensah</p>
            <p><strong>Email:</strong> markmensah@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0246743211</p></li>
            </ul>
            </div>

            <div className="row">
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Paul Armah Nii Tackie</p>
            <p><strong>Email:</strong> paulntackie@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0552308560</p></li>
            </ul>
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Dr. Ansong</p>
            <p><strong>Email:</strong> ansong38@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0505553419</p></li>
            </ul>
            <ul className='mb-5 col-4 mt-5'>
              <li><p><strong>Name:</strong> Ferdinard Katriku</p>
            <p><strong>Email:</strong> ferdkatriku@ug.edu.gh</p>
            <p><strong>Phone:</strong> 0247900124</p></li>
            </ul>
            </div>
            
      </Container>
    </div>
  )
}

export default LecturerContact;
