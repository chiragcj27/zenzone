// components/BackgroundVideo.tsx
import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
      >
        <source src="/beach.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg">This is an example of a video background.</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
