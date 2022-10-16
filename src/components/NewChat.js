import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import user from "../assets/json/users.json"
import SearchAcc from './SearchAcc';

const NewChat = ({ newChat, setNewChat }) => {
  const [search, setSearch] = useState(true)

  document.addEventListener("click", (e) => {
    
    if (e.target !== document.getElementById("search-form")) {
      setSearch(false)
    }
  })
  return (
    <AnimatePresence>
      {newChat && (
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
        <div className='bg-primary h-[110px] w-full flex py-4'>
            <motion.div
              animate={{
                opacity: [0, 1],
                translateX: [-70, 0],
                transition: {
                  delay:0.1,
                  duration:0.4
                }
              }}
              className='flex items-center mt-auto ml-5'>
              <BiArrowBack className='text-icon text-2xl cursor-pointer' onClick={()=>setNewChat(false)}/>
              <h1 className='text-xl text-icon ml-8 font-medium'>Chat Baru</h1>
            </motion.div>
          </div>
          
          <div className='flex w-full h-[50px] py-[4px] px-3 items-center'>
        <form  action="" className='w-full'>
          <div  className='h-full w-full py-[6px] bg-primary rounded-lg overflow-hidden flex items-center px-3 transition-all ease-in-out duration-300'>
            {search ? (
              <motion.button animate={{rotate:[-180,0],scale:[0,1] }} transition={{duration:0.4}} onClick={()=>setSearch(!search)}>
                <BiArrowBack className=' transition-all ease-in-out duration-300 cursor-pointer text-line'  /> 
              </motion.button>
            ) : (
              <AiOutlineSearch className='text-icon transition-all ease-in-out duration-300 cursor-pointer' onClick={()=>setSearch(!search)}/>
            )
            }
            <input id='search-form' type="text" className='px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4' placeholder={search ? "" : "Cari atau mulai chat baru"} onFocus={() => setSearch(!search)} />
          </div>
        </form>
          </div>
          
          <div className='h-[65px] w-full flex items-center hover:bg-primary px-3'>
            <div className='w-[50px] h-[50px] bg-line rounded-full flex justify-center items-center'>
            <MdGroup className='text-white text-2xl'/>
            </div>
            <h1 className='text-white ml-3'>Group baru</h1>
          </div>

          <h1 className='text-line mt-9 ml-7'>A</h1>

          <div className='w-full h-[370px] overflow-y-scroll'>
            {user.map((value) => {
              return (
                <SearchAcc key={value.name} value={value}/>
              )
            })}
          </div>
      </motion.div>
    )}
      
    </AnimatePresence>
   
  )
}

export default NewChat