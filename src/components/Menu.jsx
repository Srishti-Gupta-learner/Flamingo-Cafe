import React from 'react'

import { useEffect, useRef } from 'react';

const Menu = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the video plays even if the 'autoPlay' attribute is finicky
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div id='about'>
     
   

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
             <div className="video absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        src="/videos/food.mp4"
        className="w-full h-full object-cover"
      />
    </div>
          </div>
        </div>

        <div className="md:col-span-3">
     <div  className="noisy" />
     {/* <img src="/images/about1.png" alt="grid-img-1" /> */}
      <div className="video absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        src="/videos/food2.mp4"
        className="w-full h-full object-cover"
      />
    </div>
    </div>

      </div>
    </div>
  )
}

export default Menu
