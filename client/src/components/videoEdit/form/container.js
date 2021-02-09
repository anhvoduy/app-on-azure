import React from 'react';
import PropTypes from 'prop-types'; 
import { Container, Form } from 'react-bootstrap';

const FormEdit = function({ video }) {    
    return (
        <Container className='form-full-screen'>
            <Form>
                <Form.Group controlId="txtVideoName">
                    <Form.Label>Video Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter video name" value={video.VideoName} />
                </Form.Group>
                <Form.Group controlId="txtVideoNameEn">
                    <Form.Label>Video Name (English):</Form.Label>
                    <Form.Control type="text" placeholder="Enter video name (en)" value={video.VideoName_EN} />
                </Form.Group>
                <Form.Group controlId="txtDescription">
                    <Form.Label>Short Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter short description" value={video.Description} />
                </Form.Group>
                <Form.Group controlId="txtDescription">
                    <Form.Label>Short Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter short description (en)" value={video.Description_EN} />
                </Form.Group>
            </Form>
        </Container>
    );
}

FormEdit.propTypes = {
    video: PropTypes.object
};

export default FormEdit;