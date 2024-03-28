import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const menuLinks = [
        { name: "HOME", link: "" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];

    useEffect(() => {
      window.addEventListener("scroll", () => {
        const nav = document.querySelector('nav');
        window.scrollY > 0 ? setSticky(true) : setSticky(false);
      })
    }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? 'md:backdrop-blur text-blue-900':'text-blue-900'
      }`}
    >
      <div className='flex items-center justify-between'>
        <div className='mx-7'>
          <img src='/s.png' className='h-[50px] w-[50px]' />
        </div>
        <div className={`${sticky ? 'md:backdrop-blur-md':'bg-blue-900 text-blue-900'} text-white md:block hidden px-7 py-2 rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {menuLinks?.map((menu, i) => (
                <li key={i} className='text-white px-6 hover:underline'>
                  <a className={`${sticky ? 'visited:text-blue-900/60': 'visited:text-white'}`} href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${open ? "text-white" : "text-blue-900"} text-3xl md:hidden m-5`}
        >
            <CiMenuKebab name='menu' />
        </div>
        <div className={`text-gray-900 md:hidden absolute w-2/3 h-screen px-7 py-2 bg-blue-900 top-0 duration-300 ${open ? 'right-0':'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            { menuLinks?.map((menu, i) => (
              <li key={i} className='px-6 hover:underline'>
                <a className='visited:text-white' href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
