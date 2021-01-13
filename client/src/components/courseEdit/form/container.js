import React from 'react';
import PropTypes from 'prop-types'; 
import { Container, Form, Button } from 'react-bootstrap';
import Select from 'react-dropdown-select';

const FormEdit = function({ employee, teams, selectTeams, saveEmployee, onSelectChangeTeam, onChangeEmployeeName }) {    
    return (
        <Container className='form-full-screen'>
            <Form>
                <Form.Group controlId="formEmpCode">
                    <Form.Label>Employee Code:</Form.Label>
                    <Form.Control type="text" placeholder="Enter employee code" value={employee.EmployeeCode} readOnly={true}/>
                </Form.Group>
                <Form.Group controlId="formEmpName">
                    <Form.Label>Employee Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter account name" value={employee.EmployeeName} onChange={onChangeEmployeeName} />
                </Form.Group>
                <Form.Group controlId="formSelectTeam">
                    <Form.Label>Teams:</Form.Label>
                    <Select options={teams} onChange={onSelectChangeTeam} multi={true} values={selectTeams} />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={saveEmployee}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

FormEdit.propTypes = {
    employee: PropTypes.object,
    teams: PropTypes.array,
    selectTeams: PropTypes.array,
    saveEmployee: PropTypes.func,
    onSelectChangeTeam: PropTypes.func,    
    onChangeEmployeeName: PropTypes.func
};

export default FormEdit;