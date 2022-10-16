import React, { useState } from "react";
import { motion } from "framer-motion";
import users from "../assets/json/users.json";
import UserGroup from "./UserGroup";
import SearchUserGroup from "./SearchUserGroup";

const GroupInfo = ({ selectedChat,setSearch  }) => {
  const [mute, setMute] = useState(0);
  const muteHandler = () => {
    if (mute === 21) {
      setMute(0);
    } else {
      setMute(21);
    }
  };
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        translateY: [-100, 0],
        transition: {
          delay: 0.3,
          duration: 0.3,
        },
      }}
      className="mt-[60px] w-full ">
      <div className="w-full h-[315px] bg-[#111B21] flex flex-col items-center justify-center">
        <div className="w-[200px] rounded-full overflow-hidden">
          <img src={selectedChat.pic} alt="" />
        </div>
        <h1 className="text-white text-2xl">{selectedChat.name}</h1>
        <p className="text-slate-500">{`Group ${users.length -1} peserta`}</p>
      </div>

      <div className="w-full h-[88px] bg-secondary mt-3 px-8 flex flex-col justify-center">
        <p className="text-white">
          Tetap kawal Ayyub hanya untuk bersenang-senang, yang lain pengalihan
          isu.
        </p>
      </div>

      <div className="w-full h-[55px] bg-secondary flex items-center px-8 justify-between">
        <p className="text-slate-500 text-sm">Media, tautan, dan dok</p>
        <div className="flex items-center h-full text-slate-500 gap-3">
          <p>1</p>
          <button>
            <span
              data-testid="chevron-right-alt"
              data-icon="chevron-right-alt"
              class="aft2yglh">
              <svg
                viewBox="0 0 10 21"
                height="21"
                width="10"
                preserveAspectRatio="xMidYMid meet"
                class=""
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 10 21">
                <path
                  fill="currentColor"
                  d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="w-full h-auto pb-5 bg-secondary mt-3 pl-10 pr-8 flex flex-col gap-3">
        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 16 15"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                class="">
                <path
                  fill="currentColor"
                  d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path>
              </svg>
            </button>
            <h1 className="text-white">Pesan berbintang</h1>
          </div>
          <button className="text-icon ml-auto">
            <svg
              viewBox="0 0 10 21"
              height="21"
              width="10"
              preserveAspectRatio="xMidYMid meet"
              class=""
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 10 21">
              <path
                fill="currentColor"
                d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                class="">
                <path
                  fill="currentColor"
                  d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path>
              </svg>
            </button>
            <h1 className="text-white">Bisukan notifikasi</h1>
          </div>
          <div className="h-4 w-10 bg-slate-600 ml-auto rounded-full flex items-center relative">
            <motion.div
              animate={{
                translateX: mute,
              }}
              className="w-5 h-5 rounded-full absolute bg-icon -top-[2px] cursor-pointer"
              onClick={muteHandler}></motion.div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px] mt-3">
          <div className="flex text-icon gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                class="">
                <path
                  fill="currentColor"
                  d="M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"></path>
              </svg>
            </button>
            <div>
              <h1 className="text-white">Enkripsi</h1>
              <p className="text-slate-500 text-sm">
                Pesan terenkripsi secara end-to-end. Klik untuk memverifikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
        
      <div className="w-full h-auto bg-secondary mt-3">
        <div className="w-full h-10 px-10 py-2 flex items-center">
          <p className="text-slate-400 text-sm">{`${users.length - 1} peserta`}</p>
          <button className="text-icon ml-auto" onClick={()=>setSearch(true)}>
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
          </button>
        </div>
        {users.map((user) => {
        return !user.isGroupChat && <UserGroup user={user} />
          
        })}
      </div>
      <div className="w-full h-[113px] bg-secondary mt-3 pl-10 pr-8 flex flex-col">
        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-red-400 gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                class=""
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.6,8.1l1.2-1.2l5.1,5.1l-5.1,5.1l-1.2-1.2l3-3H8.7v-1.8h10.9L16.6,8.1z M3.8,19.9h9.1 c1,0,1.8-0.8,1.8-1.8v-1.4h-1.8v1.4H3.8V5.8h9.1v1.4h1.8V5.8c0-1-0.8-1.8-1.8-1.8H3.8C2.8,4,2,4.8,2,5.8v12.4 C2,19.1,2.8,19.9,3.8,19.9z"></path>
              </svg>
            </button>
            <div>
              <h1 className="text-red-400">Keluar Group</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full h-[50px]">
          <div className="flex text-red-400 gap-5">
            <button>
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                class=""
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 24 24">
                <g>
                  <g id="thumb-down">
                    <path
                      fill="currentColor"
                      d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <div>
              <h1 className="text-red-400">Laporkan Group</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GroupInfo;
