import React from 'react'
import NetflixTypoLogo from '../images/netflix-typo.svg'
import Button from './Button'

export default function Navbar() {
  return (
    <div className=' w-[100%] h-[10vh] absolute top-0 flex justify-between pl-[10vw] pr-[10vw]'>
      
<div  className=' max-w-[250px] h-full flex justify-center items-center '>
<img src={NetflixTypoLogo} alt="netflix logo"  className=' max-h-[100px] max-w-[150px]'/>
</div>

<div  className='p-2 w-[100px] h-full flex justify-center items-center shrink-0'>
<Button text={"Sign in"}/>
</div>


    </div>
  )
}
