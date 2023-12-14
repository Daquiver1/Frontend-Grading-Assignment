import React from 'react';

const footer= () => {
    return (
        <footer style={footerAttributes}>
            <div>
                <p>&copy;2023 The Grade Reporting System. All Rights Reserved</p>
                <p>Contact: info@gradesystem.com</p>
                <p>Follow us on <a href="https://twitter.com/gradesystem" target="_blank" rel="noopener noreferrer" style={{color: 'cyan',}}>Twitter</a></p>
            </div>

        </footer>
    );
}

const footerAttributes = {
    background: '#001f3f',
    color: 'white',
    textAlign: 'center',
    marginTop: '160px',


}
export default footer;