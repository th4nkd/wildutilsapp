import React from 'react';
import './LoadingScreen.css';
import LoadingImg from '../assets/images/loading.png';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <img
          src={LoadingImg}
          alt="Loading Animation"
          className="loading-image"
        />
      </div>
      <div className="loading">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
