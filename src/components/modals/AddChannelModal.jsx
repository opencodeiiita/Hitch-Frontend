import React from 'react'

const AddChannelModal = ({setShowModal}) => {
  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        <main className='relative flex flex-col items-start bg-white  min-h-fit max-h-max min-w-[25%] rounded-lg shadow-lg pt-3 pl-5 pr-7 pb-5 max-sm:h-screen max-sm:justify-center'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1 className='text-3xl font-bold mb-3'>Create a Channel</h1>
            <label htmlFor='name' className='text-lg font-bold'>Name</label>
            <aside className='relative w-full'>
            <input className='w-full py-3 px-2' placeholder='# Enter your channel name' />
            <span className='absolute right-2 top-3 text-text'>25</span>
            </aside>
            <small className='max-w-md text-[#525252] mt-1.5'>Channels are  converastion that we have on any topics,Use the name which is easy to find and understand </small>
            <section className='mt-3 flex justify-between items-center w-full'>
                <span className='text-[#464446]/75 grow font-medium'>Step 1 of 2</span>
                <button className='py-1.5 px-5 rounded-lg border-2 border-black/10 shadow-lg font-semibold shadow-black/20 mr-2'>Back</button>
                <button className='bg-[#1C0C40] border-2 text-white font-light py-1.5 px-5 rounded-lg'>Next</button>
            </section>
        </main>
        </div>
  )
}

export default AddChannelModal