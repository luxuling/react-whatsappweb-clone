import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import GroupInfo from './GroupInfo'
import UserInfo from './UserInfo'

const ProfileMsg = ({ profile, setProfile, selectedChat,search ,setSearch }) => {
 
  return (
    <AnimatePresence>
      {profile && (
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
        className='w-[410px] h-full border-l bg-black/30 border-slate-700 fixed right-0 overflow-y-scroll'
        >
          <div className='h-[60px] w-full bg-primary flex items-center gap-6 fixed z-30 top-0'>
            <button className='text-icon ml-6' onClick={()=>setProfile(false)}>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><path enable-background="new" d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path></svg>
            </button>
            <h1 className='text-white text-lg'>{`Info ${selectedChat.isGroupChat ? "group" : "kontak"}`}</h1>
          </div>
          {selectedChat.isGroupChat ? (
            <GroupInfo selectedChat={selectedChat} search={search} setSearch={setSearch} />
          ): (
            <UserInfo selectedChat={selectedChat}/>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfileMsg