import React from 'react';
import RowItem from './row';

const Content = function({ employees }) {  
  return (
    <tbody>
      {
        (Array.isArray(employees) && employees.length) 
        ? employees.map((item, index) => <RowItem key={'key' + index} index={index} rowItem={item} />)
        : null
      }      
    </tbody>
  );
}

export default Content;