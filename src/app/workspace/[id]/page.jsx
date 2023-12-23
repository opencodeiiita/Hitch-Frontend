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
            <div className='flex grow bg-background-dark pr-2.5 pb-2'>
                <section className='flex flex-col justify-between bg-background-dark pb-6 pl-4'>
                    <ul className='space-y-2'>
                        {/* Map over all channels user belongs to here */}
                        {[1,2,3,4,5].map(channel=>(
                            <WorkSpaceIcon key={channel} channelId={channel} channelIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHq11jm0fyr1x4kg6DK1ptduHcV4ZUQwTZw&usqp=CAU" isActive={channel==params.id}/>
                        ))}
                    </ul>
                    <aside className='flex flex-col justify-center items-center space-y-7 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-[#F2D8FF] h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-[#F2D8FF] h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        
                        <aside className='relative w-fit'>
                            <img src='https://avatarfiles.alphacoders.com/364/364185.png' width={48} height={48} className='rounded-xl object-cover' />
                            <p className='absolute w-3 h-3 bg-green-500 rounded-full -bottom-1 -right-1'></p>
                        </aside>

                    </aside>
                </section>
                <section className='h-full w-[249px] bg-white rounded-[10px] rounded-tl-none mr-2'>
                    {/* Please put the sidebar component inside this without changing any styles of section */}
                </section>
                <ConversationCards />
            </div>
        </div>
    )
}

