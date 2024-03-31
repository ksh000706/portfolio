import { useState } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='w-screen'>
        <Navbar />
        <div>
          <div className='self-auto dark:bg-blue-950'>
            <Introduction />
            <About className='mt-[90px]' />
            <Projects />
          </div>
        </div>
      </div>
    </>
  )
};

export default App;