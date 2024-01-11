import React, { useState } from 'react'



const FileSharingModal = ({setShowModal}) => {
    const [fileName,setFileName] = useState("");
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
                <input type='file' className='border file rounded border-text py-1.5 px-2' onChange={({target: {files}})=>setFileName(files[0].name)} />
            </aside>
           
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