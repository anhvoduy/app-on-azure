import React from 'react';
import PropTypes from 'prop-types'; 
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player'

const Display = function({ title, text, files = [] }) {
    return (
        <Container className='form-full-screen'>
        { title && files.length && <ReactPlayer url={files[0].VideoFileUrl} playing={true} /> }
        </Container>
    );
}

Display.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    files: PropTypes.array
};

export default Display;