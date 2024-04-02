import React from 'react';
import Navbar from './Navbar';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';

function Home() {
  return (
    <div>
        <Navbar />
        <div className='self-auto bg-white dark:bg-blue-950'>
            <Introduction />
            <About className='mt-[90px]' />
            <Projects />
        </div>
    </div>
  )
};

export default Home;
