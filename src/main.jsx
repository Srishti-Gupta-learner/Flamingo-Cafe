import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

 gsap.registerPlugin(ScrollTrigger, SplitText);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
