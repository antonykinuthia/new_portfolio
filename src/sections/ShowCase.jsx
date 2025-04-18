import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scroll } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const sectionRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    
    
    useGSAP(() => {
        const projects = [firstRef.current, secondRef.current, thirdRef.current];

        gsap.fromTo(sectionRef.current, {opacity: 0,}, {opacity: 1, y: 0, duration:1.5,});

        projects.forEach((project, index) => {
            gsap.fromTo(project, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                delay: 0.3 * (index + 1),
                duration: 1.5,
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom-=100',
                    end: 'bottom bottom'
                }
            })
        })

        // return() => Scroll

    }, {scope: sectionRef})

    // +
    // =

  return (
    <div ref={sectionRef} id='work' className='app-showcase'>
      <div className='w-full'>
       <div className='showcaselayout'>

         <div ref={firstRef}
         className='first-project-wrapper'>
            <div className='image-wrapper'>
                <img src='/images/project1.png'/>
            </div>
            <div className='text-content'>
                <h2>On-Demand Rides Made Simple with a powerful, user-friendly App called Ryde</h2>
                <p className='text-white-50 md:text-xl'>
                    An app built with React native, Expo & Tailwindcss for fast, user-friendly experience.
                </p>
            </div>
         </div>

         <div className='project-list-wrapper overflow-hidden'>

            <div ref={secondRef}
            className='project'>
                <div className='image-wrapper bg-[#ffefdb]'>
                    <img src='/images/project2.png'/>
                </div>
                <div>
                    <h2>Library management platform</h2>
                </div>
            </div>

            <div ref={thirdRef} className='project'>
                <div className='image-wrapper bg-[#f0afdb]'>
                    <img src='/images/project3.png'/>
                </div>
                <div>
                    <h2>YC Directory</h2>
                </div>
            </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default ShowCase