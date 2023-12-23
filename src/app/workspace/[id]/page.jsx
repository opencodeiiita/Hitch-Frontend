"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import ConversationCards from "@/components/ConversationCard/ConversationCard";

const WorkSpaceIcon=({channelId,channelIcon,isActive})=>
{
    const router = useRouter();
    return (
        <li className={`pl-1 pr-2 py-1.5 ${isActive?"bg-white":"bg-transparent"} rounded-l-lg`} onClick={()=>router.push(`/workspace/${channelId}`)}>
            <img src={channelIcon} width={48} height={48} className='rounded-lg' />
        </li>
    )
}

export default function Page({params}) {
    return (
        <div className='w-screen h-screen bg-background-dark flex flex-col'>
            <nav className='flex justify-between p-2'>
                <span></span>
                {/* Enter searchbar here */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

            </nav>
            <div className='flex grow'>
                <section className=' w-12 '>
                    <ul>
                        {/* Map over all channels user belongs to here */}
                        {[1,2,3,4,5].map(channel=>(
                            <WorkSpaceIcon key={channel} channelId={channel} channelIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHq11jm0fyr1x4kg6DK1ptduHcV4ZUQwTZw&usqp=CAU" isActive={channel==params.id}/>
                        ))}
                    
                    </ul>
                </section>
                <ConversationCards />
            </div>
        </div>
    )
}

