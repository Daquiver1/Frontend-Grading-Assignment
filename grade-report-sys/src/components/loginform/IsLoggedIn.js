import React from 'react';

const IsLoggedIn = (props) => {
    const status = props.status;
    return status;
}

IsLoggedIn.defaultProps = {
    status: false
}

export default IsLoggedIn;