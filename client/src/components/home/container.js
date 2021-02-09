import React, { useState, useEffect, useCallback } from 'react';
import Header from '../base/header';
import Footer from '../base/footer';
import Content from './content';
import videoService from '../../services/videoService';

const Container = function() {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const queryData = useCallback(async function (pSize, pIndex) {
    try
    {
      setLoading(true);

      let resVideo = await videoService.getList(pSize, pIndex);
      let { page_data } = resVideo;
      setVideos(page_data);      
     
      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      throw err;
    }
  }, []);
  
  useEffect(() => {
    queryData(50, 0);
  },[queryData]);

  const callAction = (e) => {
    e.preventDefault();    
    return videoService.status();
  };

  return (
    <div className='wrap home-page'>
      <Header />

      <Content callAction={callAction} loading={loading} videos={videos} />
      
      <Footer />
    </div>
  );
}

export default Container;