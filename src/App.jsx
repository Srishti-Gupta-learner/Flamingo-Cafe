import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Special.jsx'
import Contact from './components/Contact.jsx'
import Special from './components/Special.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	 <Navbar />
	 <Hero />
	 <Cocktails />
	 <About />
	 <Art />
	 <Special />
	 <Menu />
	 <Contact />
	</main>
 )
}

export default App


