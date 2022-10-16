import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
const OptionMyChat = ({option}) => {
  return (
    <AnimatePresence>
      {option && (
        <motion.div animate={{ scale: [0, 1]}} transition={{ duration:0.3}} exit={{scale:0}} className='absolute w-[197px] h-[176px] flex bg-primary top-[40px] shadow-sm rounded-md shadow-slate-700 right-4 py-1 origin-top-right'>
      <ul className='text-white w-full'>
        <li className='py-2 hover:bg-secondary px-4'>Group baru</li>
        <li className='py-2 hover:bg-secondary px-4'>Pesan Berbintang</li>
        <li className='py-2 hover:bg-secondary px-4'>Setelan</li>
        <li className='py-2 hover:bg-secondary px-4'>Keluar</li>
      </ul>
    </motion.div>
      )}
      
    </AnimatePresence>
    
  )
}

export default OptionMyChat