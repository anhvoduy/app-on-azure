import React from 'react';
import PropTypes from 'prop-types'; 

const Container = function({ title, text }) {
  return (
    <div className='col-md-4 mb-5'>
      <div className='card h-100'>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-text'>{text}</p>
        </div>
        <div className='card-footer'>
          <a href='/' className='btn btn-primary btn-sm'>More Info</a>
        </div>
      </div>
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Container;