import React from 'react'

const DeleteChannelModal = ({channelName,setShowModal}) => {

    const clickHandler=()=>
    {
        // Enter actual function to call API here
        setShowModal(false);
    }
  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        <main className='flex flex-col items-start bg-white  min-h-fit max-h-max min-w-[25%] max-w-[45%] rounded-lg shadow-lg pt-3 pl-5 pr-7 pb-5 max-sm:h-screen max-sm:justify-center max-sm:min-w-full'>
            <h1 className='text-2xl font-bold'>Delete Channel</h1>
            <p className='max-w-md text-[#525252] mt-3'>Are you sure you want to delete <b>#{channelName}</b>? This cannot be undone.</p>
            <section className='mt-3 flex justify-between items-center w-full'>
                <span className='text-[#464446]/75 grow font-medium max-sm:hidden'></span>
                <button className='py-1.5 px-5 rounded-lg' onClick={()=>setShowModal(false)}>Cancel</button>
                <button className='bg-red-600 text-white font-light py-1.5 px-5 rounded-lg' onClick={clickHandler}>Delete Channel</button>
            </section>
        </main>
        </div>
  )
}

export default DeleteChannelModal