import React, { useState } from 'react'

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

const Attachment = ({file, setFile}) =>
{
    return (
        <section className='flex flex-col space-y-1 border rounded border-text py-1.5 px-2 '>
            <aside className='flex rounded-sm p-0.5 items-center bg-blue-100 w-fit'>
                {file.type === 'application/pdf'
                ?<svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2V7L12 7.05441C11.9999 7.47848 11.9998 7.8906 12.0455 8.23052C12.097 8.61372 12.2226 9.051 12.5858 9.41421C12.949 9.77743 13.3863 9.90295 13.7695 9.95447C14.1094 10.0002 14.5215 10.0001 14.9456 10H14.9456H14.9456H14.9456L15 10H20V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H12ZM14 2.00462V7C14 7.49967 14.0021 7.77383 14.0277 7.96402L14.0287 7.97131L14.036 7.97231C14.2262 7.99788 14.5003 8 15 8H19.9954C19.9852 7.58836 19.9525 7.31595 19.8478 7.06306C19.6955 6.69552 19.4065 6.40649 18.8284 5.82843L16.1716 3.17157C15.5935 2.59351 15.3045 2.30448 14.9369 2.15224C14.684 2.04749 14.4116 2.01481 14 2.00462ZM8 13C8 12.4477 8.44772 12 9 12L15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14L9 14C8.44772 14 8 13.5523 8 13ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z" fill="#ef4444"/>
                </svg>
                :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>}

                <small className='font-semibold text-gray-800 pr-1'>{file?.name}</small>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 hover:cursor-pointer hover:text-red-500 w-4 h-4" onClick={()=>setFile("")}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </aside>

        </section>
    )
}

const AddTag = ({setTagFlag, setTags}) =>
{
    const [tag,setTag] = useState("");
    const clickHandler = () =>
    {
        setTags(prev=>[...prev,{tag,color:getRandomColor()}]);
        setTagFlag(false);
    }
    return (
        <aside className='flex space-x-2 pb-0.5'>
            <input value={tag} onChange={(e)=>setTag(e.target.value)} className='px-1.5 border rounded-md border-gray-400 ' placeholder='Enter Tag Name'/>
            <button className='px-1  rounded-lg text-green-500 hover:ring-1 hover:ring-green-400 disabled:text-gray-500 disabled:hover:cursor-not-allowed' disabled={tag==""} onClick={clickHandler}>Add Tag</button>
            <button className='px-1  rounded-lg text-red-500 hover:ring-1 hover:ring-red-400' onClick={()=>setTagFlag(false)}>cancel</button>
        </aside>
    )
}

const Tags = ({tags,setTags}) =>
{
    return (
        <ul className='flex space-x-2 flex-wrap '>
            {tags.map(({tag,color})=>(
             <li className='bg-[${color}] mb-1 px-3 py-0.5 rounded-full flex items-center space-x-1.5' style={{backgroundColor:color}}>
                <span className='text-white text-sm'>{tag}</span>
                <svg className="w-4 h-4 text-white hover:cursor-pointer" onClick={()=>setTags(prev=>prev.filter(item=>item.tag!==tag))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </li>))}
        </ul>
        
    )
}

const FileSharingModal = ({setShowModal}) => {
    const [name,setName] = useState("");
    const [file,setFile] = useState("");
    const [tagFlag,setTagFlag] = useState(false);
    const [tags,setTags] = useState([]);
    const [path,setPath] = useState("");

    const isDisabled = () => name==="" || file==="" || tags.length===0 || path===""

    const clickHandler = () =>
    {
        // Enter function to handle share file click
    }
    
  return (
    <div className='w-screen h-screen bg-black/40 fixed z-30 flex justify-center items-center  '>
        <main className='relative bg-white w-[480px] py-4 px-6 rounded-md flex flex-col items-stretch space-y-2 max-sm:h-full max-sm:w-full'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1 className='text-2xl font-semibold pb-2'>Share a File</h1>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Name of File</label>
                <input value={name} className='border rounded border-text py-1.5 px-2' placeholder='Enter the name of file' onChange={(e)=>setName(e.target.value)}/>
            </aside>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Attachment</label>
               {file===""
                ?<input type='file' accept='.pdf, .jpeg, .jpg, .mp4, .png' className='border file rounded border-text pt-1.5 pb-1 px-2' onChange={({target: {files}})=>setFile(files[0])} />
                :<Attachment file={file} setFile={setFile}/>}
                <small className='text-gray-500'>Only pdf, images and videos allowed</small>
            </aside>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Tags</label>
                {tagFlag
                ?<AddTag setTagFlag={setTagFlag} setTags={setTags} />
                :(<aside className='flex items-center'>
                <Tags tags={tags} setTags={setTags}/>
                <svg onClick={()=>setTagFlag(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 hover:cursor-pointer mb-1 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </aside>
                )
                }

            </aside>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Path</label>
                <input value={path}  className='border rounded border-text py-1.5 px-2 font-semibold' placeholder='Enter the path of file' onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^a-zA-Z0-9/]/g, '');
                    setPath(inputValue);
                    }}/>
                { <small className={`text-text font-semibold ${path===""?"invisible":"visible"}`}>
                   <span>The Above means that in File Section it will be saved in </span>
                    {path.split('/').reverse().map((folder, index, array) => (
                    <span key={folder}>
                        {folder} folder{index < array.length - 1 ? ' in ' : ''}
                    </span>
                    ))}
                </small>}
            </aside>
            <button className='text-white bg-primary py-2 px-4 rounded-md self-end disabled:brightness-50 disabled:hover:cursor-not-allowed' disabled={isDisabled()} onClick={clickHandler}>Share File</button>
        </main>
    </div>
  )
}

export default FileSharingModal