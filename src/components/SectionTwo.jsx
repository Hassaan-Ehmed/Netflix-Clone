import React from 'react'
import Cards from './ShortCard'

export default function SectionTwo() {
  return (

    // Section Box 
    <div className='w-full h-[80vh] bg-black flex justify-center items-center relative'>
      
      <div className='w-full h-[5px] bg-stone-500 absolute top-0'></div>
{/* Main Content Div */}
<div className='w-full laptop:w-[80%] h-[90%] bg-black flex flex-col-reverse laptop:flex-row justify-around items-center'>

{/* Image */}
<div className=' flex flex-col justify-around items-center overflow-hidden laptop:ml-6 relative bg-black'>
  <Cards/>
<img src='/images/mobile-vertical.jpg' alt="" className='w-full h-full object-contain' />
</div>


{/* Text */}
<div className='mt-4 w-[90%] laptop:w-[60%] h-[40%]  bg-black flex flex-col justify-around items-center laptop:mr-6'>

<h1 className='text-4xl laptop:text-[2.7rem] font-bold text-white text-center leading-tight'>Download your shows to watch offline</h1>
<p className='text-lg laptop:text-xl text-center font-normal text-white'>Save your favorites easily and always have something to watch.</p>

</div>


</div>
      
    </div>
  )
}
