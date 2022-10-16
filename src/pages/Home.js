import React, { useState } from 'react'
import ChatBox from '../components/ChatBox'
import HeroBg from '../components/HeroBg'
import ImageDetail from '../components/ImageDetail'
import MyChats from '../components/MyChats'
import ProfileMsg from '../components/ProfileMsg'
import SearchMsg from '../components/SearchMsg'
import SearchUserGroup from '../components/SearchUserGroup'

const Home = () => {
  const [chatBox, setChatBox] = useState(false)
  const [selectedChat, setSelectedChat] = useState({})
  const [profile, setProfile] = useState(false)
  const [searchMsg, setSearhMsg] = useState(false)
  const [search, setSearch] = useState(false)
  const [detailPic,setDetailPic] = useState(false)
  

  return (
    <section className='w-full h-screen flex bg-secondary overflow-hidden'>
      <SearchUserGroup search={search} setSearch={setSearch} />
      <ImageDetail detailPic={detailPic} setDetailPic={setDetailPic} />
      <MyChats setChatBox={setChatBox} setSelectedChat={setSelectedChat} setDetailPic={setDetailPic} />
      {chatBox ? (
        <>
          <ChatBox selectedChat={selectedChat} profile={profile} setProfile={setProfile} searchMsg={searchMsg} setSearhMsg={setSearhMsg} />
          <ProfileMsg profile={profile} setProfile={setProfile} selectedChat={selectedChat} search={search} setSearch={setSearch} />
          <SearchMsg searchMsg={searchMsg} setSearhMsg={setSearhMsg} selectedChat={selectedChat} />
        </>

        
      ) : (
          <HeroBg/>
      )}
    </section>
  )
}

export default Home