import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Display from './display';
import Footer from '../base/footer';
import videoService from '../../services/videoService';

const Container = function() {  
  const { id: video_key } = useParams();  
  const [video, setVideo] = useState(null);

  const queryData = useCallback(async function () {
    try {      
      let vid = await videoService.getVideoByKey(video_key);
      setVideo(vid);
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
      {
        video ? <Display title={video.VideoName} text={video.Description} files={video.Files} /> : null
      }
      <Footer />
    </div>
  );
}

export default Container;