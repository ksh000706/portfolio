import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const menuLinks = [
        { name: "ABOUT", link: "/about" },
        { name: "SKILLS", link: "/skills" },
        { name: "CONTACT", link: "/contact" },
    ];

    useEffect(() => {
      window.addEventListener("scroll", () => {
        const nav = document.querySelector('nav');
        window.scrollY > 0 ? setSticky(true) : setSticky(false);
      })
    }, []);



  return (
    <nav
      className={`fixed w-full left-0 -top-2 z-[999] ${
        sticky ? 'md:backdrop-blur-md text-blue-900 dark:text-white':'text-blue-900 dark:text-white'
      }`}
    >
      <div className='flex items-center justify-between'>
        <div className='pt-3 pl-3 pr-3 pb-3 hover:animate-spin'>
          <a href='/'>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="50px" height="50px" viewBox="0 0 1308.000000 1244.000000"
              preserveAspectRatio="xMidYMid meet">
              <g className='fill-blue-900 dark:fill-white' transform="translate(0.000000,1244.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M5965 12434 c-724 -43 -1241 -136 -1821 -329 -360 -120 -742 -290
                  -1065 -475 -902 -516 -1662 -1275 -2230 -2227 -120 -202 -333 -627 -425 -848
                  -134 -324 -269 -767 -333 -1091 -88 -443 -113 -980 -65 -1394 79 -688 315
                  -1250 682 -1624 466 -475 1054 -609 2102 -480 648 80 1296 247 2061 533 351
                  131 586 192 863 226 149 18 460 21 592 5 307 -37 620 -143 873 -296 285 -174
                  531 -439 611 -661 32 -90 26 -194 -19 -288 -42 -91 -171 -220 -291 -289 -366
                  -215 -979 -343 -1789 -375 -904 -36 -2061 151 -3345 539 -655 198 -1370 467
                  -1594 599 l-50 29 33 -71 c243 -534 635 -1169 1013 -1640 477 -596 967 -1027
                  1557 -1370 730 -423 1722 -759 2529 -857 309 -37 446 -45 816 -44 490 1 837
                  33 1270 120 1535 308 2822 1141 3818 2472 273 365 494 720 740 1187 119 225
                  145 284 229 525 336 957 430 1697 287 2270 -79 317 -223 566 -472 818 -178
                  181 -333 261 -572 297 -127 20 -520 20 -705 0 -296 -31 -530 -76 -1295 -245
                  -904 -200 -1257 -264 -1735 -312 -199 -19 -647 -17 -762 5 -360 68 -584 209
                  -689 432 -127 267 -61 636 169 945 102 137 235 233 430 309 462 180 1054 207
                  1982 91 944 -119 1909 -385 3023 -836 128 -52 235 -94 237 -94 7 0 -56 225
                  -100 356 -288 863 -861 1734 -1575 2392 -666 615 -1429 1060 -2307 1346 -554
                  180 -1111 285 -1788 336 -140 11 -776 21 -890 14z"/></g>
            </svg>
          </a>
        </div>
        <div className='pt-4 pl-1'>
            <ThemeSwitcher />
        </div>
        <div className={`${sticky ? 'md:backdrop-blur-md':'bg-blue-900 dark:bg-white/70 text-blue-900'} text-white dark:text-blue-900 md:block hidden px-5 py-2 rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-[9px] text-lg'>
            {menuLinks?.map((menu, i) => (
                <li key={i} className='px-6 hover:underline'>
                  <a className={`${sticky ? 'text-blue-900 visited:text-blue-900/70 dark:text-white/70':'text-white visited:text-white dark:text-blue-950'} tracking-wide`} href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${open ? "text-white" : "text-blue-900"} text-3xl md:hidden m-5`}
        >
            <CiMenuKebab className='dark:fill-white' name='menu' />
        </div>
        <div className={`text-gray-900 md:hidden absolute w-2/3 h-screen px-7 py-2 bg-blue-900/95 top-0 duration-300 ${open ? 'right-0':'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            { menuLinks?.map((menu, i) => (
              <li key={i} className='px-6 hover:underline'>
                <a className='text-white visited:text-white tracking-wide' href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
