import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Display from './display';
import Footer from '../base/footer';
import videoService from '../../services/videoService';

const Container = function() {  
  const { id: video_key } = useParams();
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);

  const queryData = useCallback(async function () {
    try {
      console.log(video_key);
      let videoInfo = await videoService.getVideoByKey(video_key);      
      setVideo(videoInfo);
    } catch (err) {
      throw err;
    }
  }, [video_key]);
  
  useEffect(() => {
    queryData();
  },[queryData]);  

  return (
    <div className='wrap player-page'>
      <Header />      
      
      <Display loading={loading} video={video} />
      
      <Footer />
    </div>
  );
}

export default Container;