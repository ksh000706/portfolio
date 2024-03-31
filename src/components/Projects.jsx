import React from 'react'

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
                <img className='hover: h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-40' src='/magazine-mockup.png' />
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl text-white font-semibold">haru</div>
            </div>

            <div id='haru' className='relative group'>
                <img className='h-full object-cover overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-40' src='/haru_high_blur.jpg' />
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl text-white font-semibold">haru</div>
            </div>

            <div id='the-water-drop'>
                <img className='h-full object-cover' src='/TWD_front_notree.jpg' />
            </div>

            <div id='logo-design'>
                <img className='h-full object-cover' src='/personalLogo.png' />
            </div>

            <div id='car-car-o-talk'>
                <img className='h-full object-cover' src='/car-car-o-talk.png' />
            </div>

            <div id='impossible-photography'>
                <img className='h-full object-cover' src='/impossible-photography.png' />
            </div>

            <div id='design-interventon'>
                <img className='h-full object-cover' src='/rbcm-redesign.png' />
            </div>

            <div id='envolve'>
                <img className='h-full object-cover' src='/envolve.png' />
            </div>

            <div id='photobook'>
                <img className='h-full object-cover' src='/photobook.png' />
            </div>
        </div>
    </div>
  )
}

export default Projects
