import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import user from "../assets/json/users.json"
import SearchAcc from "./SearchAcc";

const SearchUserGroup = ({ search, setSearch }) => {
  const [searchBtn, setSearchBtn] = useState(true)

  return (
    <AnimatePresence>
      {search && (
        <motion.div
          animate={{
            opacity: [0, 1],
            transition: {
              duration:0.2
            }
          }}
          exit={{
            opacity: [1, 0],
            transition: {
              delay:0.3
            }
          }}
          className="w-full h-full bg-secondary/70 flex items-center justify-center fixed z-[999]">
          <motion.div
            animate={{
              scale: [0, 1],
              transition: {
                duration:0.3
              }
            }}
            exit={{
              scale: [1, 0],
              transition: {
                duration: 0.2,
              }
            }}
            className="h-[515px] w-[440px] bg-secondary rounded-md">
            <div className="h-[60px] w-full bg-primary flex items-center gap-6">
              <button
                className="text-icon ml-6"
                onClick={() => setSearch(false)}>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  class=""
                  fill="currentColor"
                  enable-background="new 0 0 24 24">
                  <path
                    enable-background="new"
                    d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path>
                </svg>
              </button>
              <h1 className="text-white text-lg">Cari Peserta</h1>
            </div>
            <div className="flex w-full h-[50px] py-[4px] px-3 items-center">
              <form action="" className="w-full">
                <div className="h-full w-full py-[6px] bg-primary rounded-lg overflow-hidden flex items-center px-3 transition-all ease-in-out duration-300">
                  {searchBtn ? (
                    <motion.button
                      animate={{ rotate: [-180, 0], scale: [0, 1] }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSearchBtn(!searchBtn)}>
                      <BiArrowBack className=" transition-all ease-in-out duration-300 cursor-pointer text-line" />
                    </motion.button>
                  ) : (
                    <AiOutlineSearch
                      className="text-icon transition-all ease-in-out duration-300 cursor-pointer"
                      onClick={() => setSearchBtn(!searchBtn)}
                    />
                  )}
                  <input
                    id="search-form"
                    type="text"
                    className="px-3 bg-transparent text-icon outline-none placeholder:text-sm ml-4"
                    placeholder={searchBtn ? "" : "Cari.."}
                    onFocus={() => setSearchBtn(!search)}
                  />
                </div>
              </form>
            </div>

            <div className="w-full h-20 flex items-center px-7">
              <h1 className="text-line">A</h1>
            </div>
            <div className="w-full h-[300px] overflow-y-scroll">
            {user.map((value) => {
              return (
                <SearchAcc key={value.name} value={value}/>
              )
            })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchUserGroup;
