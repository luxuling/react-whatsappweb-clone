import React from 'react'

const UserGroup = ({user}) => {
  return (
    <div className="h-[65px] w-full hover:bg-primary pl-10 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer">
      <div className="w-[43px] rounded-full overflow-hidden h-[43px] flex items-center justify-center">
        <img src={user.pic} alt="" />
      </div>

      <div className="h-full w-[80%] py-3">
        <div>
          <h1 className="capitalize text-white">{user.name}</h1>
          <p className='text-slate-500 text-sm'>Hai, saya menggunakan WhatsApp.</p>
        </div>

      </div>
    </div>
  )
}

export default UserGroup