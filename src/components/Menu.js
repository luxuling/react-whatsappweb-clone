import { AnimatePresence,motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Menu = ({ menu, x, y, setX, setY, setMenu ,selectedChat}) => {
  document.addEventListener("click", (e) => {
    if (e.target !== document.getElementById("menu")) {
      setMenu(false)
    }
  })
    if (y >= 300) {
      setY(300)
    } if (x >= 750) {
      setX(750)
    }

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          id='menu'
          animate={{
            scale: [0, 1],
            opacity:[0,1],
            transition: {
              delay: 0,
              duration:0.2
            }
          }}
          exit={{
            scale: [1, 0],
            transition: {
              delay: 0,
              duration:0.2
            }
          }}
          style={{
            x: x,
            y:y
          }}
          className={`absolute w-[192px] h-auto bg-primary flex ${y>= 380? "origin-bottom-left":"origin-top-left"} py-1 rounded-md`}
        >
          {selectedChat.isGroupChat ? 
            (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Info group</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Pilih pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Bisukan notifikasi</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Bersikan pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Keluar gorup</li>
              </ul>
            )
            : (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Info kontak</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Pilih pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Tutup chat</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Bisukan notifikasi</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Pesan sementara</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Bersikan pesan</li>
                <li className='py-2 hover:bg-secondary px-4 cursor-pointer'>Hapus chat</li>
              </ul>
            )
          }
        </motion.div>
      )}
    </AnimatePresence>
    
  )
}

export default Menu