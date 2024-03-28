import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfilePic from './components/ProfilePic';
import Introduction from './components/Introduction';
import About from './components/About';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='w-screen'>
        <Navbar />
        <div className=''>
          <div className='self-auto mt-[90px]'>
            <Introduction />
            <About />
          </div>
          {/* <div className='self-auto mt-[90px]'>
            <ProgressBar />
            <ProfilePic />
          </div> */}
        </div>
      </div>
    </>
  )
};

export default App;