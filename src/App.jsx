import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import {ScrollTrigger, SplitText} from "@gsap/all";


const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
