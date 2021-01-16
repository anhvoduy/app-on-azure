import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Row = function({ index, rowItem }) {  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{rowItem.CourseName}</td>
      <td>{rowItem.Description}</td>
      <td className='row-btn'>
        <Link to={`/course/${rowItem.CourseKey}`}>Edit</Link>
      </td>
    </tr>
  );
}


Row.propTypes = {
  index: PropTypes.number,
  rowItem: PropTypes.object
}

export default Row;