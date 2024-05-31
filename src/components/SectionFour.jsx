import React from 'react'
import Cards from './ShortCard'

export default function SectionFour() {
  return (

    // Section Box 
    <div className='w-full h-[80vh] bg-black flex justify-center items-center relative'>
      
      <div className='w-full h-[5px] bg-stone-500 absolute top-0'></div>
{/* Main Content Div */}
<div className='w-full laptop:w-[80%] h-[90%] bg-black flex flex-col-reverse laptop:flex-row justify-around items-center'>

{/* Image */}
<div className=' flex flex-col justify-around items-center overflow-hidden laptop:ml-6 relative bg-black'>

<img src='/images/kids.png' alt="" className='w-full h-full object-contain' />
</div>


{/* Text */}
<div className='mt-4 w-[90%] laptop:w-[60%] h-[40%]  bg-black flex flex-col justify-around items-center laptop:mr-6 leading-5'>

<h1 className='text-4xl laptop:text-[2.7rem] font-bold text-white text-center leading-tight'>Create profiles for kids</h1>
<p className='text-lg laptop:text-xl text-center font-normal text-white'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>

</div>


</div>
      
    </div>
  )
}
