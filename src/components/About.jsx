import React from 'react'

import { useEffect, useRef } from 'react';

const About = () => {

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
      {/* <div className="mb-16 md:px-0 px:5">
        <div className="content">
          <div className="md-col-span-8">
            <p className="badge">Best Cousins</p></div>
            <div className="subcontent">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, incidunt tempore, iusto veniam ducimus eveniet unde quia atque inventore eum cumque et impedit ullam dolore libero est soluta itaque veritatis! Architecto, necessitatibus tempora nobis, sed saepe nam neque eum illum maxime, quidem cumque quisquam aliquam eaque!

              </p></div>
              <div>
                <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5</p>
                <p className="text-sm texxt-white-100">
                  More than +12000 customer
                </p>
              </div>
            </div>
          </div>
        */}

         <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Best Cocktails</p>
			<h2>
			 Where every detail matters <span className="text-white">-</span>
				from muddle to garnish
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +12000 customers
			 </p>
			</div>
		 </div>
		</div>
	 </div>

   

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
           <img src="/images/about1.png" alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
           <img src="/images/about2.png" alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
           <img src="/images/about3.png" alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
           <img src="/images/about4.png" alt="grid-img-1" />
          </div>
        </div>
       
      

      </div>
    </div>
  )
}

export default About
