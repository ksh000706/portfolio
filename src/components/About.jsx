import React from 'react'
import Strings from '../shared/Strings'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

function About() {
  return (
    <div className='text-center flex flex-col items-center'>
        <h2 className='font-mono text-[20px] mb-10'>
            {Strings.ABOUT_HEADING}
        </h2>
        <BiSolidQuoteLeft className='text-blue-800 text-[34px]' />
        <div className='px-10'>
          <h2 className='max-w-3xl px-20 my-5 font-mono text-[14px]'>
              {Strings.ABOUT_DESC}
          </h2>
        </div>
        <BiSolidQuoteRight className='text-blue-800 text-[34px]' />
    </div>
  )
}

export default About
