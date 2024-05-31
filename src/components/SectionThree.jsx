import React from 'react'

export default function SectionThree() {
  return (

    // Section Box 
    <div className='w-full h-[80vh] bg-black flex justify-center items-center relative'>
      
      <div className='w-full h-[5px] bg-stone-500 absolute top-0'></div>
{/* Main Content Div */}
<div className='w-full h-[90%] bg-black flex flex-col laptop:flex-row justify-center gap-4 items-center'>


{/* Text */}
<div className='mt-4 w-[90%] laptop:w-[40%] h-[40%]  bg-black flex flex-col justify-around items-center laptop:ml-6'>

<h1 className='text-4xl laptop:text-[2.7rem] font-bold text-white text-center'>Watch everywhere</h1>
<p className='text-lg laptop:text-xl text-center font-normal text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

</div>

<div className='bg-black laptop:w-[50%] flex flex-col justify-around items-center overflow-hidden  laptop:mr-6'>
<img src='/images/devices.png' alt="" className='w-full h-full object-contain' />
</div>

</div>
      
    </div>
  )
}
