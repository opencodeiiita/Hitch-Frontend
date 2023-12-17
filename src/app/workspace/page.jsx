'use client'
import React, {useState} from 'react'
import CreateWorkspace from '@/components/workspace/CreateWorkspace';

export default function page () 
{
    const [showModal,setShowModal] = useState(false);
    return (
        <>{showModal && <CreateWorkspace setShowModal={setShowModal} />}
        <div className='flex justify-center items-center'>
            <button className='p-3 bg-primary text-white absolute top-2/4 right-1/2 z-30' onClick={()=>setShowModal(true)}>Click to open modal</button>
        </div>
        </>
    )
}