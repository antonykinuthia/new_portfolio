import React, { useEffect, useRef } from 'react';
import Hero from "./sections/Hero.jsx";
import { ReactLenis} from 'lenis/react'
import ShowCase from './sections/ShowCase.jsx';

const App = () => {
    
    return (
        <ReactLenis root>
            <main>
                <Hero/>
                <ShowCase/>
            </main>
        </ReactLenis>
    );
};

export default App;
