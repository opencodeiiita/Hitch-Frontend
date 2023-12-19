import React from 'react'
import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar } from '@mui/material';
const Card = () => {
  return (
    <>
      <div className='flex flex-col w-full items-center border-gray-100 border-b-4  bg-white pt-1 px-4 sm:pb-0 pb-5'>
        <div className='flex flex-row w-full items-center justify-start sm:justify-between  '>
          <div className='flex items-center'>
            <img src="./images/logo.svg" className=' w-24 h-24 sm:w-30 sm:h-30' />

            <div className='flex-col text-lg sm:text-xl font-extrabold mx-3 '>

              The Palisadoes Foundation

              <div className='flex flex-row items-center justify-start my-1'>
                <section className='hidden sm:flex'>

               
                <AvatarGroup
                  max={7}
                  
                >
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/1.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/2.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/3.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/4.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/5.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/6.jpg" />
                  <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="./images/7.jpg" />
                  
                </AvatarGroup>
                </section>
                <text className='sm:ml-2 text-gray-400 text-sm font-semibold'>
                  1,423 members
                </text>
              </div>
            </div>
          </div>
          <button className='hidden sm:flex bg-[#390A75] text-md sm:text-sm font-semibold text-white rounded-lg px-6 py-3 mr-3'>
            LAUNCH HITCH
          </button>
        </div>
        <button className='flex sm:hidden w-full justify-center bg-[#390A75] text-md sm:text-xl sm:font-semibold text-white rounded-md mx-8 py-3 mt-2 '>
          LAUNCH HITCH
        </button>


      </div>


    </>
  )
}

export default Card
