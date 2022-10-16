import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import bg from "../assets/img/wa.png";
import users from "../assets/json/users.json"
import Menu from "./Menu";
import OptionChatBox from "./OptionChatBox";
import MenuTextMsg from "./MenuTextMsg";
import MenuTextMsgL from "./MenuTextMsgL";
const ChatBox = ({ selectedChat,profile, setProfile ,searchMsg,setSearhMsg}) => {
  const [user, setUser] = useState([])
  const [menu, setMenu] = useState(false)
  const [option, setOption] = useState(false)
  const [menuText,setMenuText] = useState(false)
  const [menuTextL,setMenuTextL] = useState(false)
  const [x ,setX] = useState()
  const [y, setY] = useState()
  
  useEffect(() => {
    setUser(users.filter((usr) => usr.isGroupChat === false))
    document.getElementById("chatbox").addEventListener("contextmenu", (e) => {
      e.preventDefault()
      setX(e.offsetX)
      setY(e.offsetY)
      setMenu(false)
        setMenu(true)
      console.log(e);
    })
  }, [])

  return (
    <motion.div
      animate={{
        width: profile || searchMsg ? [1000, 546] : 1000,
        transition: {
          duration: 0.2,
        }
      }}
      id="chatbox"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      >
      <div className="z-40 w-full h-[60px] bg-primary flex items-center pl-3 pr-6 relative">
        <OptionChatBox option={option} selectedChat={selectedChat} />
        <div className="w-[45px] h-[45px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer" onClick={()=>setProfile(true)}>
          <img src={selectedChat.pic} alt="" />
        </div>
        <div className="ml-3">
          <h1 className="text-lg text-white font-medium">{selectedChat.name}</h1>
          <p className="text-xs text-slate-400">
            {selectedChat.isGroupChat ? (
              user.map((value) => {
                return (
                    `${value.name}, `
                  )
              })
            ): (
              "terakhir dilihat hari ini pukul 20.00"
            )}
            {selectedChat.isGroupChat ? ("Anda"): ("")}
          </p>
        </div>

        <div className="ml-auto h-full flex gap-4 items-center">
          <button className="text-icon" onClick={()=>setSearhMsg(true)}>
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
          </button>
          <button className={`text-icon ${option && "bg-slate-700"} p-1 rounded-full`} onClick={()=>setOption(!option)}>
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
          </button>
        </div>
      </div>
      <div className="w-full h-[91%]">
        <Menu menu={menu} x={x} y={y} setX={setX} setY={setY} setMenu={setMenu} selectedChat={selectedChat} />
        <div className="w-full h-[90%] flex justify-between relative overflow-y-auto px-4">
          
          <div className="text-white h-8 rounded-b-lg rounded-tr-lg px-1 mt-12 mr-3 bg-primary relative items-center flex py-1 group">
            <MenuTextMsgL menuTextL={menuTextL} />
            <p className="text-sm px-2">Hello world</p>
            <span className="text-primary absolute top-0 -left-2">
            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
            </span>
            <p className="text-icon text-xs mt-auto mr-1">19.00</p>
            <button id="menuTextbtn" className="absolute right-1 top-1 text-icon bg-primary/70 rounded-b-full backdrop:blur-xl opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200" onClick={()=>setMenuTextL(!menuTextL)}>
            <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
            </button>
          </div>

          <div className="text-white h-8 rounded-b-lg rounded-tl-lg px-1 mt-5 mr-3 bg-[#008069] relative items-center flex py-1 group">
            <MenuTextMsg menuText={menuText} setMenuText={setMenuText} />
            <p className="text-sm px-2">Hello world</p>
            <span className="text-[#008069] absolute top-0 -right-2">
            <svg viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
            </span>
            <p className="text-icon text-xs mt-auto mr-1">19.00</p>
            <span className="text-sky-300 mt-2">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" class=""><path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z" fill="currentColor"></path></svg>
            </span>
            <button id="menuTextbtn" className="absolute right-1 top-1 text-icon bg-[#008069]/70 rounded-b-full backdrop:blur-xl opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200" onClick={()=>setMenuText(!menuText)}>
            <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
            </button>
          </div>

        </div>
      <div className="w-full h-[66px] bg-primary flex items-center px-5 justify-between">
          <button className="text-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" class="ekdr8vow dhq51u3o"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
          </button>
          <button className="text-icon">
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" ><path fill="currentColor" d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"></path></svg>
          </button>
          <form action="" className="w-[786px] h-[39px]">
            <input type="text" className="bg-secondary/50 h-full rounded-lg w-full outline-none px-3 text-slate-300" placeholder="Ketikan pesan"/>
          </form>
          <button className="text-icon">
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
          </button>
      </div>
      </div>
    </motion.div>
  );
};

export default ChatBox;
