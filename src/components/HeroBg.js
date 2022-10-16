import React from 'react'
import hero from "../assets/img/hero.png"

const HeroBg = () => {
  return (
    <div className='bg-hero h-full w-[70%] flex flex-col'>
      <div className='w-full flex justify-center mt-20'>
        <img src={hero} alt="" className='ml-8'/>
      </div>
      <span className='w-full h-[6px] bg-line block mt-auto'></span>
    </div>
  )
}

export default HeroBg