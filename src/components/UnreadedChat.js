import React from 'react'
import user from "../assets/json/users.json"
import UnreadedCard from './UnreadedCard'
const UnreadedChat = () => {
  const unreaded = user.filter((value) => value.isGroupChat == true)
  console.log(unreaded);
  return (
    <div className='h-full w-full flex flex-col'>
      <div className='w-full h-16 flex justify-center items-center'>
        <h1 className='text-line opacity-70'>DIFILTER BERDASARKAN BELUM DIBACA</h1>
      </div>
      <div>
        {unreaded.map((value) => {
          return (
            <UnreadedCard key={value.name} value={value}/>
          )
        })}
      </div>
      <div className='mt-5 text-center w-[90%] self-center border-t border-slate-700 h-10 items-center flex justify-center'>
        <h1 className='text-xs text-white '>Pesan pribadi Anda <span className='text-sky-300'>terenkripsi secara end-to-end</span></h1>
      </div>
    </div>
  )
}

export default UnreadedChat