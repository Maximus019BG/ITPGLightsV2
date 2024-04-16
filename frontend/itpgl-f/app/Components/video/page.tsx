import React from 'react';
import MP4 from '../../assets/ITPGL Video.mp4';

export default function VideoComponent() {
  return (
    <div className="fixed inset-0 flex items-center justify-start">
      <video className="h-full w-2/5 object-cover" src={MP4} autoPlay loop muted />
    </div>
  );
}
