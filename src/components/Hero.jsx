import React from 'react'
import heroBackground from '../images/hero-bg.jpg';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className='w-full h-[100vh] bg-slate-500 relative'>
<img src={heroBackground} alt=""  className='object-cover h-[100vh] w-[100%] bg-blend-darken' />
<div className='bg-black w-[100%] h-[100vh] absolute top-0 opacity-40'></div>

<Navbar/>
    </div>
  )
}
