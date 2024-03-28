import React from 'react'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='h-[120px] border-r-[1px]' />
        <div className='text-wrap w-[5px] h-[5px] bg-blue-800 rounded-full' />
        <h2 className='text-wrap font-mono mt-5 text-black font-medium text-[13px] tracking-widest'>
            my name is
        </h2>
        <h2 className='text-[70px] text-black tracking-widest mt-5 text-center'>
            SUHYEON KIM
        </h2>
    </div>
  )
}

export default Introduction
