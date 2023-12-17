import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex flex-col w-full rounded-t-lg mb-1 shadow-md bg-white pt-1 sm:pb-0 pb-5'>
    <div className='flex flex-row items-center justify-start sm:justify-between  '>
       <div className='flex items-center'> 
        <img src="./images/logo.svg" className='ml-2 w-24 h-24 sm:w-30 sm:h-30'/>
      
      <div className='flex-col text-lg sm:text-xl font-extrabold mx-3 '>

           The Palisadoes Foundation 
         
        <div className='flex flex-row items-center justify-start my-1'>
          <img src="./images/logo.svg"
            alt='logo'
            className='hidden sm:flex mr-2'
          />
          <text className='text-gray-400 text-sm font-semibold'>
              1,423 members
          </text>
        </div>
      </div>
      </div>
      <button className='hidden sm:flex bg-[#390A75] text-md sm:text-md font-semibold text-white rounded-lg px-6 py-4 mr-8'>
        LAUNCH HITCH
      </button>
    </div>
    <button className='flex sm:hidden justify-center bg-[#390A75] text-md sm:text-xl sm:font-semibold text-white rounded-md px-5 py-3 mt-2 mx-5'>
        LAUNCH HITCH
      </button>
    </div>
    
     
     </>
  )
}

export default Card
