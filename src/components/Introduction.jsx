import React from 'react'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='h-[190px] border-r-[1px] dark:border-r-[0.5px]' />
      <div className='w-[5px] h-[5px] bg-blue-900 dark:bg-white rounded-full' />
      <h2 className='dark:text-white text-wrap font-mono mt-[60px] font-medium text-[13px] tracking-widest'>
          my name is
      </h2>
      <h2 className='dark:text-white text-[70px] tracking-widest mt-5 text-center'>
          SUHYEON KIM
      </h2>
    </div>
  )
}

export default Introduction
