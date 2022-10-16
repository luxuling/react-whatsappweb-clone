import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const ImageDetail = ({detailPic,setDetailPic}) => {
  return (
    <AnimatePresence>
      {detailPic && (
        <motion.div
          exit={{
            opacity: [1, 0],
            transition: {
              delay:0.5
            }
          }}
          className='w-full h-full bg-secondary/95 fixed z-[999]'>
          <div className='w-full h-[60px] flex items-center px-7 justify-start'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/295143056_444739964202427_3835901422192902002_n.jpg?ccb=11-4&amp;oh=01_AVwJkBw4SQufrU2ex9TEB5oKRUQPKQ3sEa7N12-WkXsziA&amp;oe=635211A8" alt="" />
            </div>
            <h1 className='text-white ml-4'>+62 222-2222-2222</h1>
            <button className='text-icon ml-auto' onClick={()=>setDetailPic(false)}>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M19.8,5.8l-1.6-1.6L12,10.4L5.8,4.2L4.2,5.8l6.2,6.2l-6.2,6.2l1.6,1.6l6.2-6.2l6.2,6.2l1.6-1.6L13.6,12 L19.8,5.8z"></path></svg>
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <motion.div
              exit={{
                width: 205,
                borderRadius:"100%",
                translateX: -485,
                translateY:75
              }}
              className="w-[585px] mt-2 origin-bottom overflow-hidden">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/295143056_444739964202427_3835901422192902002_n.jpg?ccb=11-4&amp;oh=01_AVwJkBw4SQufrU2ex9TEB5oKRUQPKQ3sEa7N12-WkXsziA&amp;oe=635211A8" alt="" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageDetail