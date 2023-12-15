import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Container } from 'react-bootstrap';

const MyFooter = () => {
    return (
        <footer className="bg-light text-dark">
            <Container className="text-center py-3">
                <p className="small">&copy; 2023 Student Lib. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default MyFooter;