import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { BiArrowBack } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import {IoCameraSharp} from "react-icons/io5"
import MenuProfile from './MenuProfile';
const SideBar = ({ sidebar, setSideBar ,setDetailPic}) => {
  const [menu ,setMenu] = useState(false)
  const [x, setX] = useState()
  const [y, setY] = useState()
  const fotoProfile = (e) => {
    setX(e.pageX)
    setY(e.pageY)
    setMenu(!menu)
    console.log(menu);
  }
  return (
    <AnimatePresence>
      {sidebar && (
        <motion.div
          animate={{
            translateX: [-400, 0],
            transition:{
              duration:0.3
            }
          }}
          exit={{
            translateX: -410,
            transition: {
              delay: 0.2,
              duration: 0.3
            }
          }}
          className='absolute z-[99] w-full h-full bg-secondary'>
          <MenuProfile x={x} y={y} menu={menu} setDetailPic={setDetailPic} setMenu={setMenu} />

          <div className='bg-primary h-[110px] w-full flex py-4'>
            <motion.div
              animate={{
                opacity: [0, 1],
                translateX: [-70, 0],
                transition: {
                  duration: 0.5,
                  delay:0.1
                }
              }}
              className='flex items-center mt-auto ml-5'>
              <BiArrowBack className='text-white text-2xl cursor-pointer' onClick={()=>setSideBar(false)}/>
              <h1 className='text-xl text-white ml-8 font-medium'>Profil</h1>
            </motion.div>
          </div>
          <motion.div
            animate={{
              scale: [0, 1]
            }}
            transition={{
              duration: 0.3,
              delay:0.1
            }}
            className='w-full flex justify-center mt-8'>
            <div className='w-[205px] rounded-full overflow-hidden group relative cursor-pointer' onClick={(e) => fotoProfile(e)}>
              <img src="https://pps.whatsapp.net/v/t61.24694-24/295143056_444739964202427_3835901422192902002_n.jpg?ccb=11-4&amp;oh=01_AVwJkBw4SQufrU2ex9TEB5oKRUQPKQ3sEa7N12-WkXsziA&amp;oe=635211A8" alt="" />
              <div className='w-full h-full absolute top-0 z-50 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 flex flex-col justify-center items-center'>
                <IoCameraSharp className='text-white text-2xl' />
                <h1 className='text-center text-white text-xs w-1/2'>UBAH FOTO PROFILE</h1>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{
              translateY: [-30, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                delay:0.2
              }
          }}
          className='px-7 flex flex-col gap-6 mt-9'>
            <h3 className='text-line text-sm'>Nama Anda</h3>
            <div className='flex items-center'>
              <h1 className='text-xl text-white'>Anthony</h1>
              <RiPencilFill className='text-icon ml-auto text-2xl'/>
            </div>
            <p className='text-icon text-sm'>Ini bukan nama pengguna atau PIN Anda. Nama ini akan ditampilkan ke kontak WhatsApp Anda.</p>
          </motion.div>

          <motion.div
            animate={{
              translateY: [-30, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                delay:0.2
              }
          }}
          className='px-7 flex flex-col gap-6 mt-9'>
            <h3 className='text-line text-sm'>Info</h3>
            <div className='flex items-center'>
              <h1 className='text-lg text-white'>Hai, saya menggunakan WhatsApp.</h1>
              <RiPencilFill className='text-icon ml-auto text-2xl'/>
            </div>
          </motion.div>
       </motion.div>
      )}
      
    </AnimatePresence>
   
  )
}

export default SideBar