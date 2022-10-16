import React, { useState } from 'react'
import { motion } from 'framer-motion' 

const UserInfo = ({selectedChat}) => {
  const [mute, setMute] = useState(0)
  const muteHandler = () => {
    if (mute === 21) {
      setMute(0)
    } else {
      setMute(21)
    }
  }
  return (
    <motion.div
            animate={{
              opacity: [0, 1],
              translateY: [-100, 0],
              transition: {
                delay: 0.3,
                duration:0.3
              }
            }}

            className='mt-[60px] w-full '>
            <div className='w-full h-[315px] bg-[#111B21] flex flex-col items-center justify-center'>
              <div className='w-[200px] rounded-full overflow-hidden'>
                <img src={selectedChat.pic} alt="" />
              </div>
              <h1 className='text-white text-2xl'>{selectedChat.name}</h1>
              <p className='text-slate-500'>+62 111-1111-1111</p>
            </div>

            <div className='w-full h-[88px] bg-secondary mt-3 px-8 flex flex-col justify-center'>
              <h3 className='text-slate-500'>Info</h3>
              <p className='text-white'>Hai, saya menggunakan WhatsApp.</p>
            </div>

            <div className='w-full h-[55px] bg-secondary mt-3 flex items-center px-8 justify-between'>
              <p className='text-slate-500 text-sm'>Media, tautan, dan dok</p>
              <div className='flex items-center h-full text-slate-500 gap-3'>
                <p>1</p>
                <button>
                  <span data-testid="chevron-right-alt" data-icon="chevron-right-alt" class="aft2yglh"><svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21" ><path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path></svg></span>
                </button>
              </div>
            </div>

            <div className='w-full h-[454px] bg-secondary mt-3 pl-10 pr-8 flex flex-col gap-3'>
              <div className='flex items-center w-full h-[50px]'>
                <div className='flex text-icon gap-5'>
                <button>
                  <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path></svg>
                  </button>
                  <h1 className='text-white'>Pesan berbintang</h1>
                </div>
                <button className='text-icon ml-auto'>
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21"><path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path></svg>
                </button>
              </div>

              <div className='flex items-center w-full h-[50px]'>
                <div className='flex text-icon gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg>
                  </button>
                  <h1 className='text-white'>Bisukan notifikasi</h1>
                </div>
                <div className='h-4 w-10 bg-slate-600 ml-auto rounded-full flex items-center relative'>
                  <motion.div
                    animate={{
                      translateX:mute
                    }}
                    className='w-5 h-5 rounded-full absolute bg-icon -top-[2px] cursor-pointer' onClick={muteHandler}></motion.div>
                </div>
              </div>

              <div className='flex items-center w-full h-[50px]'>
                <div className='flex text-icon gap-5'>
                <button>
                <svg height="20" viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5c.09 0 .182 0 .272-.003a1.5 1.5 0 0 0-.06-3c-.07.002-.14.003-.212.003v3Zm0-24c.071 0 .142 0 .213.002a1.5 1.5 0 0 0 .06-3L18 4.5v3Zm6.515-1.326a1.5 1.5 0 0 0-1.45 2.626c.124.068.246.139.367.212a1.5 1.5 0 1 0 1.554-2.566 13.503 13.503 0 0 0-.47-.272Zm5.039 4.84a1.5 1.5 0 0 0-2.566 1.554c.073.12.144.243.212.366a1.5 1.5 0 0 0 2.626-1.45 13.535 13.535 0 0 0-.272-.47Zm1.943 6.714a1.5 1.5 0 0 0-3 .06 10.76 10.76 0 0 1 0 .425 1.5 1.5 0 0 0 3 .06 13.693 13.693 0 0 0 0-.545Zm-1.67 6.787a1.5 1.5 0 0 0-2.627-1.45c-.068.124-.139.246-.212.367a1.5 1.5 0 1 0 2.566 1.554c.094-.155.185-.312.272-.47Zm-4.841 5.039a1.5 1.5 0 0 0-1.554-2.566c-.12.073-.243.144-.366.212a1.5 1.5 0 0 0 1.45 2.626c.158-.087.315-.178.47-.272ZM18 4.5C10.544 4.5 4.5 10.544 4.5 18S10.544 31.5 18 31.5v-3c-5.8 0-10.5-4.701-10.5-10.5S12.2 7.5 18 7.5v-3Z"></path><path fill="currentColor" d="M23.325 12.01a.865.865 0 0 1 1.21 1.21l-4.564 6.087a1.951 1.951 0 1 1-2.732-2.732l6.086-4.564Z"></path></svg>
                  </button>
                  <div>
                    <h1 className='text-white'>Pesan sementara</h1>
                    <p className='text-slate-500 text-sm'>Mati</p>
                  </div>
                </div>
                <button className='text-icon ml-auto'>
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21"><path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path></svg>
                </button>
              </div>

              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-icon gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"></path></svg>
                  </button>
                  <div>
                    <h1 className='text-white'>Enkripsi</h1>
                    <p className='text-slate-500 text-sm'>Pesan terenkripsi secara end-to-end. Klik untuk memverifikasi.</p>
                  </div>
                </div>
              </div>

              
              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-red-400 gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" ><path fill="currentColor" d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"></path></svg>
                  </button>
                  <div>
                    <h1 className='text-red-400'>{`Blokir ${selectedChat.name}`}</h1>
                  </div>
                </div>
              </div>

              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-red-400 gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><g><g id="thumb-down"><path fill="currentColor" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path></g></g></svg>
                  </button>
                  <div>
                    <h1 className='text-red-400'>{`Laporkan ${selectedChat.name}`}</h1>
                  </div>
                </div>
              </div>

              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-red-400 gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path></svg>
                  </button>
                  <div>
                    <h1 className='text-red-400'>{`Hapus ${selectedChat.name}`}</h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
  )
}

export default UserInfo