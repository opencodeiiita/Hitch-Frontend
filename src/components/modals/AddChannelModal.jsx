import React, {useState} from 'react'

const AddChannelModal = ({setShowModal}) => {
    const [input,setInput] = useState({channelName:"",isPrivate:false});
    const [flag,setFlag] = useState(false);

    const isChannelDisabled = () => input.channelName.length>25 || input.channelName===""

    const clickHandler=()=>
    {
        if(flag)
        {
            // Enter the actual function to call create channel API
            console.log(input);
            setShowModal(false);
        }
        else {
            setFlag(true);
        }
    }

  return (
    <div className='fixed bg-black/30 w-screen h-screen z-40 top-0 flex justify-center items-center'>
        <main className='relative flex flex-col items-start bg-white  min-h-fit max-h-max min-w-[25%] rounded-lg shadow-lg pt-3 pl-5 pr-7 pb-5 max-sm:h-screen max-sm:justify-center'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1 className='text-3xl font-bold'>Create a Channel</h1>
            {flag && <small htmlFor='name' className='text-text'>#{input.channelName}</small>}
            <label htmlFor='name' className='text-lg font-bold mt-3'>{flag?"Visibility":"Name"}</label>
            {flag 
            ? <section className='w-[450px] my-3'>      
                <input checked={!input.isPrivate} type="radio" name="visibility" id="radio1" className="bg-primary checked:bg-red-600 text-primary-500 checked:text-primary-dark" onChange={()=>setInput(prev=>({...prev,isPrivate:false}))}/>
                <label htmlFor="radio1" className='ml-3 font-medium hover:cursor-pointer'>Public - Anyone in {`{Workspacename}`}</label>
                <aside className='grid grid-cols-[auto,1fr] gap-x-3 items-center'>
                    <input checked={input.isPrivate} type='radio' name="visibility" id="radio2" className='w-fit bg-primary text-primary checked:bg-primary-dark checked:text-primary-dark' onChange={()=>setInput(prev=>({...prev,isPrivate:true}))}/>
                    <label htmlFor='radio2' className=' font-medium hover:cursor-pointer'>Private - Only Specific People</label>
                    <small className='text-gray-700 block col-start-2'>Can be viewed or joined by invitation</small>
                </aside>
            </section>
            : <aside className='relative w-full'>
            <input value={input.channelName} className='w-full py-3 px-2' placeholder='# Enter your channel name' onChange={(e)=>setInput(prev=>({...prev,channelName:e.target.value}))} />
            <span className={`absolute right-2 top-3 ${input.channelName.length >= 25?'text-red-500':'text-text'}`}>{(25 - input.channelName.length)}</span>
            </aside>}
            {!flag && <small className='max-w-md text-[#525252] mt-1.5'>Channels are  converastion that we have on any topics,Use the name which is easy to find and understand </small>}
            <section className='mt-3 flex justify-between items-center w-full'>
                <span className='text-[#464446]/75 grow font-medium'>Step {flag?"2":"1"} of 2</span>
                {flag && <button className='py-1.5 px-5 rounded-lg border-2 border-black/10 shadow-lg font-semibold shadow-black/20 mr-2' onClick={()=>setFlag(false)}>Back</button>}
                <button className='bg-[#1C0C40] border-2 text-white font-light py-1.5 px-5 rounded-lg disabled:hover:cursor-not-allowed' disabled={isChannelDisabled()} onClick={clickHandler}>Next</button>
            </section>
        </main>
        </div>
  )
}

export default AddChannelModal