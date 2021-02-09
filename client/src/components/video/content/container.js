import React from 'react';
import RowItem from './row';

const Content = function({ videos }) {  
  return (
    <tbody>
      {
        (Array.isArray(videos) && videos.length) 
        ? videos.map((item, index) => <RowItem key={'key' + index} index={index} rowItem={item} />)
        : null
      }      
    </tbody>
  );
}

export default Content;