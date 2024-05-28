import React from 'react'
import NetflixTypoLogo from '../images/netflix-typo.svg'
import Button from './Button'

export default function Navbar() {
  return (
    <div className=' w-[100%] h-[10vh] absolute top-4 flex justify-between pl-[10vw] pr-[10vw]'>
      
<div  className=' max-w-[250px] h-full flex justify-center items-center '>
<img src={NetflixTypoLogo} alt="netflix logo"  className='max-h-[90px] max-w-[90px] tablet:max-h-[90px] tablet:max-w-[140px]'/>
</div>

<div  className='p-2 w-[100px] h-full flex justify-center items-center shrink-0'>
<Button text={"Sign in"}/>
</div>


    </div>
  )
}
