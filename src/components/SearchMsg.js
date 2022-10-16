import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'

const SearchMsg = ({ searchMsg, setSearhMsg,selectedChat }) => {
  const [search, setSearch] = useState(true)

  return (
    <AnimatePresence>
      {searchMsg && (
        <motion.div
          animate={{
            right: [-450, 0],
            transition: {
              duration: 0.2,
            }
          }}
          exit={{
            right: [0, -450],
            transition: {
              duration:0.1
            }
          }}
          className='w-[410px] h-full border-l bg-secondary border-slate-700 fixed right-0'>

          <div className='h-[60px] w-full bg-primary flex items-center gap-6 '>
            <button className='text-icon ml-6' onClick={()=>setSearhMsg(false)}>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><path enable-background="new" d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path></svg>
            </button>
            <h1 className='text-white text-lg'>Mencari pesan</h1>
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
            <input id='search-form' type="text" className='px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4' placeholder={search ? "" : "Cari.."} onFocus={() => setSearch(!search)} />
          </div>
        </form>
          </div>

          <div className='text-slate-700 text-sm mt-10 w-full h-[30px] text-center'>
            <h1>{`Cari pesan di ${selectedChat.name}`}</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchMsg