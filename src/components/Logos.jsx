import React from 'react'
import  {logoIconsList} from '../constants/index'

const LogoIcon = ({ icon }) => (
    <div className='flex-none flex-center marquee-item'>
      <img src={icon.imgPath} alt={icon.name}/>
    </div>
)

const Logos = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>

        <div className='marquee h-52'>
         <div className='marquee-box md:gap-12 gp-5'>
            {logoIconsList.map((icon) => (
                <LogoIcon key={icon.name} icon={icon}/>
            ))}
            {logoIconsList.map((icon) => (
                <LogoIcon key={icon.name} icon={icon}/>
            ))}
         </div>
        </div>
    </div>
  )
}

export default Logos