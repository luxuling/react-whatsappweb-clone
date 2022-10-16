import React from 'react'

const SearchAcc = ({value}) => {
  return (
    <div className='h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer'>
      <div className='w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center'>
        <img src={value.pic} alt="" />
      </div>
      
      <div className='h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group'>
        <div>
        <h1 className='capitalize text-white'>{value.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default SearchAcc