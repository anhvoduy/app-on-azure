import * as React from 'react';

const Loading = ({ isLoading }) => {
  return <React.Fragment>{isLoading && <div>Loading ...</div>}</React.Fragment>
}

export default Loading;