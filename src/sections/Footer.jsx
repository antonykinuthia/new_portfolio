import React from 'react'
import { socialImgs } from '../constants/index'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
          <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.name} rel='noreferrer'>
                <img src={img.imgPath} alt={img.name}/>
            </a>  
          ))}
          </div>

          <div className='flex flex-col justify-center'>
           <p className='text-center md:text-end'>
            &copy; {new Date().getFullYear()} All rights reserved
           </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer