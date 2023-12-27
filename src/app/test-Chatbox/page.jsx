'use client'
import React, { useState } from 'react'
import Chatbox from '@/components/Chatbox/Chatbox'
import AddChannelModal from '@/components/modals/AddChannelModal'
const Page = () => {
  const [showChannelModal,setShowChannelModal] = useState(false);
  return (
    <>
   <Chatbox/>
   <button className='bg-primary text-white px-2 py-1 rounded-md mx-5' onClick={()=>setShowChannelModal(true)}>Click to open create channel modal</button>
   <button className='bg-primary text-white px-2 py-1 rounded-md mx-5'>Click to open add people modal</button>
   {showChannelModal && <AddChannelModal setShowModal={setShowChannelModal}/>}
   </>
  )
}


export default Page;