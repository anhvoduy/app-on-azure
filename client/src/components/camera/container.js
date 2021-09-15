import React from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import Webcam from 'react-webcam';

const Content = () => {
  return (
    <div style={{alignItems: 'center', marginLeft: '20px'}}>
      <Webcam />
    </div>
  )
}

const Container = function() {

  return (
    <div className='wrap video-page'>
      <Header />

      <Content />
      
      <Footer />
    </div>
  );
}

export default Container;