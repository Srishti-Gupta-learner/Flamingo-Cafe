import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
// import {ScrollTrigger, SplitText} from "@gsap/all";


const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl text-indigo-300go'>Hello! GSAP.</h1>
    </div>
  )
}

export default App
