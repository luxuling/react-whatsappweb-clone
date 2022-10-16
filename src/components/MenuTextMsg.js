import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const MenuTextMsg = ({ menuText }) => {
  
  return (
    <AnimatePresence>
      {menuText && (
        <motion.div
          animate={{
            scale:[0,1]
          }}
          exit={{
            scale:[1,0]
          }}
          transition={{
            duration:0.2
          }}
          className='absolute w-[238px] h-auto bg-primary flex origin-top-right py-1 rounded-md top-6 right-0'>
        <ul className='w-full text-slate-300'>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Info Pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Balas</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Tanggapi pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Teruskan pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Beri bintang pada pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Hapus pesan</li>
              </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuTextMsg