import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Container } from 'react-bootstrap';
import mainimg from '../images/mainimg.webp';

const Showcase = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${mainimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                }}
        >
            <Container>
                <h1 className="display-4">An Open Library to All Your Records...</h1>
            </Container>
        </div>
    );
}

export default Showcase;