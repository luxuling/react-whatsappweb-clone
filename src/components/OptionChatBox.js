import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const OptionChatBox = ({option,selectedChat}) => {
  return (
    <AnimatePresence>
      {option && (
        <motion.div
          animate={{
            scale: [0, 1],
            opacity:[0,1]
          }}
          exit={{
            scale: [1, 0],
            opacity:[1,0]
          }}
          transition={{
            duration:0.2
          }}
          className='absolute w-[192px] h-auto bg-primary flex origin-top-right py-1 rounded-md top-14 right-5'>
     {selectedChat.isGroupChat ? 
            (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4'>Info group</li>
                <li className='py-2 hover:bg-secondary px-4'>Pilih pesan</li>
                <li className='py-2 hover:bg-secondary px-4'>Bisukan notifikasi</li>
                <li className='py-2 hover:bg-secondary px-4'>Bersikan pesan</li>
                <li className='py-2 hover:bg-secondary px-4'>Keluar gorup</li>
              </ul>
            )
            : (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4'>Info kontak</li>
                <li className='py-2 hover:bg-secondary px-4'>Pilih pesan</li>
                <li className='py-2 hover:bg-secondary px-4'>Tutup chat</li>
                <li className='py-2 hover:bg-secondary px-4'>Bisukan notifikasi</li>
                <li className='py-2 hover:bg-secondary px-4'>Pesan sementara</li>
                <li className='py-2 hover:bg-secondary px-4'>Bersikan pesan</li>
                <li className='py-2 hover:bg-secondary px-4'>Hapus chat</li>
              </ul>
            )
          }
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OptionChatBox