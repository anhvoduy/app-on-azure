import React from 'react';
import PropTypes from 'prop-types';
import MainBox from '../mainBox';
import SubBox from '../subBox';

const Container = function({ loading, videos }) {
  return (
      <div className='container'>
        {
          Array.isArray(videos) && videos.length >= 1 && <MainBox title={videos[0].VideoName} text={videos[0].Description} videoKey={videos[0].VideoKey} />
        }
        <div className='card text-white bg-secondary my-5 py-4 text-center'>
          <div className='card-body'>
            <p className='text-white m-0'>This call to action card is a great place to showcase some important information or display a clever tagline!</p>
          </div>
        </div>
        <div className='row'>
          {
            Array.isArray(videos) && videos.length >= 2 && <SubBox title={videos[1].VideoName} text={videos[1].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 3 && <SubBox title={videos[2].VideoName} text={videos[2].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 4 && <SubBox title={videos[3].VideoName} text={videos[3].Description}/>
          }
        </div>
        <div className='row'>
          {
            Array.isArray(videos) && videos.length >= 5 && <SubBox title={videos[4].VideoName} text={videos[4].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 6 && <SubBox title={videos[5].VideoName} text={videos[5].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 7 && <SubBox title={videos[6].VideoName} text={videos[6].Description}/>
          }
        </div>
        <div className='row'>
          {
            Array.isArray(videos) && videos.length >= 8 && <SubBox title={videos[7].VideoName} text={videos[7].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 9 && <SubBox title={videos[8].VideoName} text={videos[8].Description}/>
          }
          {
            Array.isArray(videos) && videos.length >= 10 && <SubBox title={videos[9].VideoName} text={videos[9].Description}/>
          }
        </div>
      </div>
  );
}

Container.propTypes = {
  loading: PropTypes.bool,
  videos: PropTypes.array
};

export default Container;