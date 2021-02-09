import React from 'react';
import PropTypes from 'prop-types'; 
import image_url from '../../../images/tbs1.jpg';

const Container = function({ callAction, title, text }) {
  return (
    <div className='row align-items-center my-5'>
      <div className='col-lg-7'>
        <img className='img-fluid rounded mb-4 mb-lg-0' src={image_url} alt='Most viewed'/>
      </div>
      <div className='col-lg-5'>
        <h1 className='font-weight-light'>{title}</h1>
        <p>{text}</p>
        <a className='btn btn-primary' href='/' onClick={callAction}>Xem phim</a>
      </div>
    </div>
  );
}

Container.propTypes = {
  callAction: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Container;