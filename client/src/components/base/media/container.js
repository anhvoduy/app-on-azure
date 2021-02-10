import React from 'react';
import PropTypes from 'prop-types'; 
import ReactPlayer from 'react-player';

const Container = function({ url = '' }) {
  return (
    <ReactPlayer url={url} playing={true} muted={true} />
  );
}

Container.propTypes = {
  url: PropTypes.string
};

export default Container;