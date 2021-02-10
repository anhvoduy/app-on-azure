import React, { useCallback } from 'react';
//import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import image_url from '../../../images/tbs1.jpg';

const Container = function({ title, text, videoKey }) {
  //const history = useHistory();
  //const playVideo = useCallback(() => history.push(`/player/${videoKey}`), [history, videoKey]);
  return (
    <div className='row align-items-center my-5'>
      <div className='col-lg-7'>
        <img className='img-fluid rounded mb-4 mb-lg-0' src={image_url} alt='Most viewed'/>
      </div>
      <div className='col-lg-5'>
        <h1 className='font-weight-light'>{title}</h1>
        <p>{text}</p>
        <a className='btn btn-primary' href={`/player/${videoKey}`}>Xem phim</a>
      </div>
    </div>
  );
}

Container.propTypes = {  
  title: PropTypes.string,
  text: PropTypes.string,
  videoKey: PropTypes.string
};

export default Container;