import { useState } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MagazineMockup from './components/MagazineMockup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/magazine-layout' element={<MagazineMockup />} />
      </Routes>
    </Router>
    // <>
    //   <div className='w-screen'>
    //     <Navbar />
    //     <div>
    //       <div className='self-auto dark:bg-blue-950'>
    //         <Introduction />
    //         <About className='mt-[90px]' />
    //         <Projects />
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
};

export default App;