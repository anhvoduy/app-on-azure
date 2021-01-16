import React from 'react';
import PropTypes from 'prop-types'; 
import { Container, Form, Button } from 'react-bootstrap';

const FormEdit = function({ course, saveCourse, onChangeCourseName, onChangeCourseDesc }) {    
    return (
        <Container className='form-full-screen'>
            <Form>
                <Form.Group controlId="formCourseName">
                    <Form.Label>Course Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter course name" value={course.CourseName} onChange={onChangeCourseName} />
                </Form.Group>
                <Form.Group controlId="formCourseDesc">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter course desc" value={course.Description} onChange={onChangeCourseDesc} />
                </Form.Group>                
                
                <Button variant="primary" type="submit" onClick={saveCourse}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

FormEdit.propTypes = {
    course: PropTypes.object,
    saveCourse: PropTypes.func,
    onChangeCourseName: PropTypes.func,    
    onChangeCourseDesc: PropTypes.func
};

export default FormEdit;