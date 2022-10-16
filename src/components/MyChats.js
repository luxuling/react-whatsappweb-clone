import React, { useEffect, useState } from 'react'
import user from "../assets/json/users.json"
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from 'framer-motion'
import UserCard from './UserCard';
import OptionMyChat from './OptionMyChat';
import SideBar from './SideBar';
import NewChat from './NewChat';
import Status from './Status';
import UnreadedChat from './UnreadedChat';
const MyChats = ({setChatBox,setSelectedChat,setDetailPic}) => {
  const [search, setSearch] = useState(false)
  const [option, setOption] = useState(false)
  const [sidebar,setSideBar] = useState(false)
  const [newChat, setNewChat] = useState(false)
  const [status, setStatus] = useState(false)
  const [filter,setFilter] = useState(false)
  document.addEventListener("click", (e) => {
    
    if (e.target !== document.getElementById("search-form")) {
      setSearch(false)
    }
  })
  return (
    <div className='h-full w-[410px] bg-secondary border-r border-slate-700 relative'>
      <SideBar sidebar={sidebar} setSideBar={setSideBar} setDetailPic={setDetailPic} />
      <NewChat newChat={newChat} setNewChat={setNewChat} />
      <Status status={status} setStatus={setStatus} />
      <div className='w-full h-[60px] bg-primary flex items-center pl-4 pr-3 justify-between'>
        <div className='w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer' onClick={()=>setSideBar(true)}>
          <img src="https://pps.whatsapp.net/v/t61.24694-24/295143056_444739964202427_3835901422192902002_n.jpg?ccb=11-4&amp;oh=01_AVwJkBw4SQufrU2ex9TEB5oKRUQPKQ3sEa7N12-WkXsziA&amp;oe=635211A8" alt="" className='w-full h-full'/>
        </div>
        <div  className='flex gap-3 relative'>
          <button className='text-icon cursor-pointer p-[7px] rounded-full' onClick={()=>setStatus(true)}>
        <svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
        </button>

        <button className='text-icon cursor-pointer p-[7px] rounded-full' onClick={()=>setNewChat(true)}>
          <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
        </button>

        <button className={`text-icon cursor-pointer ${option?"bg-slate-700":""} p-[7px] rounded-full`} onClick={()=>setOption(!option)}>
        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
          </button>
          <OptionMyChat option={option} />
         
        </div>
      </div>

      <div className='flex w-full h-[53px] py-[7px] px-3'>
        <form  action="" className='w-full'>
          <div  className='h-[90%] w-full bg-primary rounded-lg overflow-hidden flex items-center px-3 transition-all ease-in-out duration-300'>
            {search ? (
              <motion.button animate={{rotate:[-180,0],scale:[0,1] }} transition={{duration:0.4}} onClick={()=>setSearch(!search)}>
                <BiArrowBack className=' transition-all ease-in-out duration-300 cursor-pointer text-line'  /> 
              </motion.button>
            ) : (
              <AiOutlineSearch className='text-icon transition-all ease-in-out duration-300 cursor-pointer' onClick={()=>setSearch(!search)}/>
            )
            }
            <input id='search-form' type="text" className='px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4' placeholder={filter ? "Cari chat yang belum dibaca" : "Cari atau mulai chat baru"} onFocus={() => setSearch(!search)} />
          </div>
        </form>
        <button className={`text-icon h-7 w-7 flex p-1 ml-2 mt-1 justify-center items-center ${filter ? "bg-line rounded-full full":""}`} onClick={()=>setFilter(!filter)}>
          <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path></svg>
        </button>
      </div>

      <div className='w-full h-[83%] overflow-y-scroll'>
        {filter ?
          <UnreadedChat/>
          :
          user.map((value) => {
          return (
            <UserCard key={value.name} value={value} setChatBox={setChatBox} setSelectedChat={setSelectedChat} />)
          })
        }
        <div className='h-[50px] w-full flex items-center justify-center'>
          <p className='text-sm text-white'>Pesan bribadi Anda <span className='text-sky-300'>terenkripsi end to end</span></p>
        </div>
      </div>
    </div>
  )
}

export default MyChats