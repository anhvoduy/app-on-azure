import React from 'react';
import PropTypes from 'prop-types'; 
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'

const FormDisplay = function({ video }) {    
    return (
        <Container className='form-full-screen'>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </Container>
    );
}

FormDisplay.propTypes = {
    video: PropTypes.object
};

export default FormDisplay;