import React from 'react'
import heroBackground from '../images/hero-bg.jpg';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className='w-full h-[100vh] bg-slate-500 relative'>
<img src={heroBackground} alt=""  className='object-cover h-[100vh] w-[100%] bg-blend-darken' />
<div className='bg-black w-[100%] h-[100vh] absolute top-0 opacity-40'></div>
<Navbar/>

<div className='w-[100%] h-[65%] absolute top-[150px]  flex justify-center items-center'>
<div  className=' w-[80%] h-full flex flex-col justify-center items-center'>
<h1 className='font-bold text-[2.2rem] text-center text-white'>Unlimited movies, TV shows, and more</h1>
<p className='font-medium text-[1.2rem] mb-7 mt-7 text-white'>Watch anywhere. Cancel anytime.</p>

{/* Form */}
<div className='b w-[80%] h-[50%] '>
<form className='w-full  h-full  flex flex-col justify-center items-center'>
  <h3 className='font-medium text-[1.1rem] text-center text-white '>Ready to watch? Enter your email to create or restart your membership.</h3>
<div className='w-[80%] lg:h-16 md:h-16 sm:h-32  flex lg:flex-row md:flex-row sm:flex-col   justify-around items-center mt-6'>
<input type="text"  className='lg:w-[60%] md:w-[100%] sm:w-[100%] h-[100%] text-[1.3rem] focus:outline-white bg-transparent' placeholder='Email Adress' />
<button className='w-[35%] h-full  bg-[#E50914] text-white font-bold text-[1.3rem]'>Get Started</button>
</div>
</form>
</div>

</div>
</div>

    </div>
  )
}
