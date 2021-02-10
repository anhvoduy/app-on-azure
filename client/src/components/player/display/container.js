import React from 'react';
import PropTypes from 'prop-types'; 
import { Container } from 'react-bootstrap';

const FormDisplay = function({ video }) {    
    return (
        <Container className='form-full-screen'>
            ABCD1
        </Container>
    );
}

FormDisplay.propTypes = {
    video: PropTypes.object
};

export default FormDisplay;