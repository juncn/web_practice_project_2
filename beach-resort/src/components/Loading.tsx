import React from 'react';
import loadingGif from '../assets/images/gif/loading-arrow.gif';

const Loading = () => (
  <div className="loading">
    <h4>Rooms data loading...</h4>
    <img src={loadingGif} alt="loading" />
  </div>
);

export default Loading;
