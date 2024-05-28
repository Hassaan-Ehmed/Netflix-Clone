import React from 'react'
import heroBackground from '../images/hero-bg.jpg';
import Navbar from './Navbar';
import { GoChevronRight } from "react-icons/go";


export default function Hero() {
  return (
    <div className='w-full h-[100vh] bg-slate-500 relative flex flex-col  justify-between items-center'>

<div className='absolute top-0 bottom-0 left-0 right-0 bg-[rgb( 0 0 0 / 40% )] bg-custom-gradient'></div>

<img src={heroBackground} alt=""  className='object-cover h-[100vh] w-[100%] bg-[rgba(0, 0, 0, 0.3)]' />
<div className='bg-black w-[100%] h-[100vh] absolute top-0 opacity-40'></div>
<Navbar/>

<div className='w-[100%] h-fit absolute top-[200px] pt-7 pb-7  flex justify-center items-center '>
<div  className=' w-[80%] h-full flex flex-col justify-center items-center gap-2'>
<h1 className='font-bold text-[1.9rem]  LM425:text-[2rem] tablet:text-[2.5rem] laptop:text-[3rem] text-center text-white'>Unlimited movies, TV shows, and more</h1>
<p className='font-normal text-[1.20rem] tablet:text-[1.40rem] laptop:text-[1.65rem] mb-4 mt-4 text-white flex justify-center items-center'>Watch anywhere. Cancel anytime.</p>

{/* Form */}
<div className='w-[100%] tablet:max-w-[80%] h-auto'>
<form className='w-full  h-full  flex flex-col justify-center items-center gap-2 '>
  <h3 className='font-normal text-[1.10rem] tablet:text-[1.25rem] laptop:text-[1.45rem] text-center text-white '>Ready to watch? Enter your email to create or restart your membership.</h3>
<div className='w-[100%] laptop:w-[60%]  h-auto flex flex-col LM425:flex-row justify-around items-center mt-6 gap-4'>
<input type="text" className='w-[100%] tablet:w-[70%] h-[50px] text-[1.3rem] text-white border border-gray-400 focus:outline-white  rounded-md pr-3 pl-2 bg-[rgba(44,44,44,0.7)]' placeholder='Email Adress' />
<button className='w-[60%] tablet:w-[40%] h-[50px] pr-2 pl-2 LM425:p-0  bg-[#E50914] text-white font-bold text-[1.1rem] tablet:text-[1.1rem]  flex justify-center items-center'>Get Started <GoChevronRight className='text-[1.5rem] font-bold' /></button>
</div>
</form>
</div>

</div>
</div>

    </div>
  )
}
