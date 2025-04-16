import React from 'react'

const ShowCase = () => {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>
       <div className='showcaselayout'>
         <div className='first-project-wrapper'>
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
            <div className='project'>
                <div className='image-wrapper bg-[#ffefdb]'>
                    <img src='/images/project2.png'/>
                </div>
                <div>
                    <h2>Library management platform</h2>
                </div>
            </div>

            <div className='project'>
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