import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Row = function({ index, rowItem }) {  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{rowItem.EmployeeCode}</td>
      <td>{rowItem.EmployeeName}</td>
      <td className='row-btn'>
        <Link to={`/employee/${rowItem.EmployeeKey}`}>Edit</Link>
      </td>
    </tr>
  );
}


Row.propTypes = {
  index: PropTypes.number,
  rowItem: PropTypes.object
}

export default Row;