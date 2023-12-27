import React from 'react'

const AddPeopleModal = ({setShowModal}) => {

    const clickHandler=()=>
    {
        // Enter actual function to call API here
        setShowModal(false);
    }
  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        <main className='relative flex flex-col items-start bg-white  min-h-fit max-h-max min-w-[25%] max-w-[45%] rounded-lg shadow-lg pt-3 pl-5 pr-7 pb-5 max-sm:h-screen max-sm:justify-center max-sm:min-w-full'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1 className='text-3xl font-bold'>Add People</h1>
            <small htmlFor='name' className='text-text'>{`#{Channelname}`}</small>
            <input className='w-full py-3 px-2 mt-3 border rounded-md' placeholder='Enter a name or email address' />
            <small className='max-w-md text-[#525252] mt-1.5'>Add people in the channel will add them in the workspace</small>
            <section className='mt-3 flex justify-between items-center w-full'>
                <span className='text-[#464446]/75 grow font-medium'></span>
                <button className='bg-[#1C0C40] border-2 text-white font-light py-1.5 px-5 rounded-lg' onClick={clickHandler}>Send Invite</button>
            </section>
        </main>
        </div>
  )
}

export default AddPeopleModal