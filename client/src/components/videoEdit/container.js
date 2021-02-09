import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Footer from '../base/footer';
import FormEdit from './form';
import videoService from '../../services/videoService';

const EditContainer = function() {
  const { id: video_key } = useParams();
  const [video, setVideo] = useState(null);

  const queryData = useCallback(async function () {
    try
    {
      let videoInfo = await videoService.getVideoByKey(video_key);
      setVideo(videoInfo);
    }
    catch (err) {
      throw err;
    }
  }, [video_key]);
    
  useEffect(() => {
    queryData();
  },[queryData]);  

  return (
    <div className='wrap video-page'>
      <Header />
      {
        video && <FormEdit video={video} />
      }
      <Footer />
    </div>
  );
}

export default EditContainer;