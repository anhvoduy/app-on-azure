import React from 'react';
import PropTypes from 'prop-types'; 
import { Container } from 'react-bootstrap';
import Media from '../../base/media';

const Display = function({ title, text, files = [] }) {
    return (
        <Container className='form-full-screen'>
        { title && files.length && <Media url={files[0].VideoFileUrl} /> }
        </Container>
    );
}

Display.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    files: PropTypes.array
};

export default Display;