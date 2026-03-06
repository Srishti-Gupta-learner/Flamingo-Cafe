import React, { useEffect, useRef } from 'react';

const Special = () => {
  // 1. We use an array of refs to track each video individually
  const videoRefs = useRef([]);

  const videoSources = [
    "/videos/food.mp4",
    "/videos/food2.mp4",
    "/videos/food3.mp4",
    "/videos/food2.mp4"
  ];

  useEffect(() => {
    // 2. Loop through each ref and trigger play
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(error => {
          console.error("Autoplay prevented for:", video.src, error);
        });
      }
    });
  }, []);

  return (
    <div id='about'>
      <div className="top-grid">
        {videoSources.map((src, index) => (
          <div key={index} className="md:col-span-3">
            <div className="noisy">
              <div className="video absolute inset-0 overflow-hidden">
                <video
                  // 3. Assign each video to its unique spot in the array
                  ref={(el) => (videoRefs.current[index] = el)}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="auto"
                  src={src}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Special 