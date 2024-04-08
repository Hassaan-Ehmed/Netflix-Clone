import React from 'react'
import NetflixTypoLogo from '../images/netflix-typo.svg'

export default function Navbar() {
  return (
    <div className=' w-[100%] h-[10vh] absolute top-0 flex justify-between pl-[10vw] pr-[10vw]'>
      
<div  className=' max-w-[250px] h-full flex justify-center items-center '>
<img src={NetflixTypoLogo} alt="netflix logo"  className=' max-h-[80px] max-w-[120px]'/>
</div>

<div  className='p-2 w-[100px] h-full flex justify-center items-center shrink-0'>
<button  className='pt-[0.4rem] pr-5 pb-[0.4rem] pl-5 text-[0.8em]  rounded-md bg-[#E50914] text-white font-semibold hover:bg-[#ce080e] active:'>Sign in</button>
{/* max-h-[100px] max-w-[65px] */}
</div>


    </div>
  )
}
