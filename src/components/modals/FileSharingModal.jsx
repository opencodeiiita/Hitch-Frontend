import React, { useState } from 'react'

const Attachment = ({file, setFile}) =>
{
    return (
        <section className='flex flex-col space-y-1 border rounded border-text py-1.5 px-2 '>
            <aside className='flex rounded-sm p-0.5 items-center bg-blue-100 w-fit'>
                <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2V7L12 7.05441C11.9999 7.47848 11.9998 7.8906 12.0455 8.23052C12.097 8.61372 12.2226 9.051 12.5858 9.41421C12.949 9.77743 13.3863 9.90295 13.7695 9.95447C14.1094 10.0002 14.5215 10.0001 14.9456 10H14.9456H14.9456H14.9456L15 10H20V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H12ZM14 2.00462V7C14 7.49967 14.0021 7.77383 14.0277 7.96402L14.0287 7.97131L14.036 7.97231C14.2262 7.99788 14.5003 8 15 8H19.9954C19.9852 7.58836 19.9525 7.31595 19.8478 7.06306C19.6955 6.69552 19.4065 6.40649 18.8284 5.82843L16.1716 3.17157C15.5935 2.59351 15.3045 2.30448 14.9369 2.15224C14.684 2.04749 14.4116 2.01481 14 2.00462ZM8 13C8 12.4477 8.44772 12 9 12L15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14L9 14C8.44772 14 8 13.5523 8 13ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z" fill="#ef4444"/>
                </svg>
                <small className='font-semibold text-gray-800 pr-1'>{file?.name}</small>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 hover:cursor-pointer hover:text-red-500 w-4 h-4" onClick={()=>setFile("")}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </aside>

        </section>
    )
}

const FileSharingModal = ({setShowModal}) => {
    const [file,setFile] = useState("");
  return (
    <div className='w-screen h-screen bg-black/40 fixed z-30 flex justify-center items-center'>
        <main className='relative bg-white w-5/12 p-4 rounded-md flex flex-col items-stretch'>
            <svg className="w-6 h-6 absolute right-5 top-5 hover:text-red-500 hover:cursor-pointer" onClick={()=>setShowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1 className='text-2xl font-semibold'>Share a File</h1>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Name of File</label>
                <input className='border rounded border-text py-1.5 px-2' placeholder='Enter the name of file'/>
            </aside>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Attachment</label>
                <input type='file' className='border file rounded border-text py-1.5 px-2' onChange={({target: {files}})=>setFile(files[0])} />
            </aside>
            <Attachment file={file} setFile={setFile}/>

            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Tags</label>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </aside>
            <aside className='flex flex-col space-y-1'>
                <label  className='text-gray-600 font-semibold'>Add Path</label>
                <input className='border rounded border-text py-1.5 px-2' placeholder='Enter the path of file'/>
                <small className='text-text font-semibold'>The Above means that in File Section it will be saved in Paper folder in Endsem folder in Exams folder</small>
            </aside>
            <button className='text-white bg-primary py-2 px-4 rounded-md self-end' >Share File</button>
        </main>
    </div>
  )
}

export default FileSharingModal