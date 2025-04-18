import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcons from '../components/models/TechLogos/TechIcons'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {

  useGSAP(() => {
    gsap.fromTo('.tech-card', {opacity: 0, y: 100}, 
    {opacity: 1, 
      y: 0, 
      duration: 1, 
      delay: 1, 
      stagger: 0.5,
       ease: 'power4.out',
       scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
       }});
  }, [])

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title='My Tech Stack'
          sub='Technologies I  work with'
        />

        <div className='tech-grid'>
        {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              <div className='tech-card-animated-bg'/>
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                 <TechIcons model={icon}/>
                </div>

                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
        ))}

       

        </div>

      </div>
    </div>
  )
}

export default TechStack