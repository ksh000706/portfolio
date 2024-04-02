import React from 'react';
import Navbar from './Navbar';

function MagazineMockup() {
  return (
    <div className='dark:bg-black'>
        <Navbar />
        <div className='mt-[90px]'>
            <div className='flex flex-col justify-center items-center w-screen relative'>
                <h2 className='dark:text-white text-[70px] tracking-widest mt-5 bottom-0 text-center absolute'>
                    MAGAZINE MOCKUP
                </h2>
                <img src='/magazine-mockup.png' />
            </div>
        </div>
    </div>
  )
}

export default MagazineMockup;
