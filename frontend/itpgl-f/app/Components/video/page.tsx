import React from 'react';
import MP4 from '../../assets/ITPGL Video.mp4';

export default function VideoComponent() {
  return (
    <div className="h-screen">
      <video className="absolute left-0 top-0 object-cover w-1/2 h-full border-none" src={MP4} autoPlay loop muted />
    </div>
  );
}
