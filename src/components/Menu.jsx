'use client';

import { allmenu } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalmenu = allmenu.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalmenu) % totalmenu;
	
	setCurrentIndex(newIndex);
 }
 
 const getmenuAt = (indexOffset) => {
	return allmenu[(currentIndex + indexOffset + totalmenu) % totalmenu]
 }
 
 const currentmenu = getmenuAt(0);
 const prevmenu = getmenuAt(-1);
 const nextmenu = getmenuAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/menu-leaf1.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/menu-leaf2.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only p-10">
		Cocktail Menu
	 </h2>
	 
	 <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
		{allmenu.map((cocktail, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button key={cocktail.id} className={`
				${isActive
				 ? 'text-white border-white'
				 : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {cocktail.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content p-10">
		<div className="arrows p-10">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevmenu.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextmenu.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentmenu.image} className="object-contain"/>
		</div>
		
		<div className="recipe p-12">
		 <div ref={contentRef} className="info">
			<p>Recipe for:</p>
			<p id="title">{currentmenu.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentmenu.title}</h2>
			<p>{currentmenu.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu