import React from 'react';

import './Blobs.scss'

import yellowBlob from '../image/yellow-blob.svg';
import blueBlob from '../image/blue-blob.svg';

const Blobs = () => {
  return (
    <div className="blob">
      <img src={yellowBlob} className="yellow-blob" />
      <img src={blueBlob} className="blue-blob" />
    </div>
  );
};

export default Blobs;
