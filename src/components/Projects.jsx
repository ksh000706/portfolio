import React from 'react';

function Projects() {
  return (
    <div className='pt-40'>
        <div id='projects'>
            <h2 className='pl-1 font-mono text-[30px] text-white bg-blue-900 dark:bg-gray-900 pr-0'>
                :PROJECTS
            </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-[1px]'>
            <div id='magazine-layout' className='relative group'>
                <a href='/magazine-layout'>
                    <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/magazine-mockup.png' />
                    <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white font-semibold'>magazine layout</div>
                </a>
            </div>

            <div id='haru' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/haru_high_blur.jpg' />
            <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>haru</div>
            </div>

            <div id='the-water-drop' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/TWD_front_notree.jpg' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>the water drop</div>
            </div>

            <div id='logo-design' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/personalLogo.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>personal logo</div>
            </div>

            <div id='car-car-o-talk' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/car-car-o-talk.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>car-car-o-talk</div>
            </div>

            <div id='impossible-photography' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-35' src='/impossible-photography.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>impossible photography</div>
            </div>

            <div id='design-interventon' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-30' src='/rbcm-redesign.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>design intervention</div>
            </div>

            <div id='envolve' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-30' src='/envolve.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>ENVOLVE</div>
            </div>

            <div id='photobook' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-30' src='/photobook.png' />
                <div className='opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[8px] flex justify-center text-lg text-blue-900 dark:text-white'>photo book</div>
            </div>
        </div>
    </div>
  )
};

export default Projects;
