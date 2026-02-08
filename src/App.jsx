// import React, { useEffect, useRef } from 'react';
import Hero from "./sections/Hero.jsx";
import { ReactLenis} from 'lenis/react'
import ShowCase from './sections/ShowCase.jsx';
import NavBar from './components/NavBar.jsx';
import Logos from './components/Logos.jsx'
import Cards from './sections/Cards.jsx';
import Experience from './sections/Experience.jsx';
import TechStack from './sections/TechStack.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
    
    return (
        <ReactLenis root>
            <main>
                <NavBar/>
                <Hero/>
                <ShowCase/>
                <Logos/>
                <Cards/>
                <Experience/>
                <TechStack/>
                <Contact/>
                <Footer/>
            </main>
        </ReactLenis>
    );
};

export default App;
