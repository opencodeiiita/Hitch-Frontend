"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ConversationCards from "@/components/ConversationCard/ConversationCard";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Sidebar from "@/components/sidebar/Sidebar";

const WorkSpaceIcon = ({ channelId, channelIcon, isActive }) => {
  const router = useRouter();
  return (
    <li
      className={`cursor-pointer pl-1 pr-2 py-1.5 ${
        isActive ? "bg-white" : "bg-transparent"
      } rounded-l-lg`}
      onClick={() => router.push(`/workspace/${channelId}`)}
    >
      <img src={channelIcon} width={48} height={48} className="rounded-lg" />
    </li>
  );
};

export default function Page({ params }) {
  const [loading, setLoading] = useState(true);
  const [drawerOpen,setDrawerOpen] = useState(false);
  return (
    <div className="w-screen h-screen bg-background-dark flex flex-col max-sm:overflow-x-hidden">
      <nav className="flex justify-between p-2 max-sm:space-x-4">
        <svg onClick={()=>setDrawerOpen(prev=>!prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 ml-3 shrink-0 text-white h-6 sm:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        <span className="max-sm:hidden"></span>
        

        {/* Enter searchbar here */}
        <aside className="flex items-center w-96 bg-gradient-to-r from-[#8E629A] to-[#7D5584] rounded-md pl-2 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3.5 h-3.5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="outline-none bg-transparent text-white placeholder:text-white text-xs placeholder:text-xs"
            placeholder="Search Hitch"
          />
        </aside>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white max-sm:shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </nav>
      <div className="flex grow bg-background-dark pr-2.5 pb-2 max-sm:pr-0 max-sm:w-fit">
        <section className={`flex flex-col justify-between bg-background-dark pb-6 pl-4 max-sm:pl-1 max-sm:shrink-0 ${drawerOpen?"":"max-sm:hidden"}`}>
          <ul className="space-y-2">
            {/* Map over all channels user belongs to here */}

            {params.id == 1 ? (
              <>
                <li className="pl-1 pr-2 py-1.5">
                  <Skeleton
                    width={48}
                    height={48}
                    className="bg-white"
                    variant="rounded"
                  />
                </li>
                <li className="pl-1 pr-2 py-1.5">
                  <Skeleton
                    width={48}
                    height={48}
                    className="bg-white"
                    variant="rounded"
                  />
                </li>
                <li className="pl-1 pr-2 py-1.5">
                  <Skeleton
                    width={48}
                    height={48}
                    className="bg-white"
                    variant="rounded"
                  />
                </li>
                <li className="pl-1 pr-2 py-1.5">
                  <Skeleton
                    width={48}
                    height={48}
                    className="bg-white"
                    variant="rounded"
                  />
                </li>
              </>
            ) : (
              [1, 2, 3, 4, 5].map((channel) => (
                <WorkSpaceIcon
                  key={channel}
                  channelId={channel}
                  channelIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHq11jm0fyr1x4kg6DK1ptduHcV4ZUQwTZw&usqp=CAU"
                  isActive={channel == params.id}
                />
              ))
            )}
          </ul>
          <aside className="flex flex-col justify-center items-center space-y-7 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-[#F2D8FF] h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 text-[#F2D8FF] h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <aside className="relative w-fit">
              {params.id == 1 ? (
                <Skeleton
                  width={48}
                  height={48}
                  className="bg-white"
                  variant="rounded"
                />
              ) : (
                <>
                  <img
                    src="https://avatarfiles.alphacoders.com/364/364185.png"
                    width={48}
                    height={48}
                    className="rounded-xl object-cover"
                  />
                  <p className="absolute w-3 h-3 bg-green-500 rounded-full -bottom-1 -right-1"></p>
                </>
              )}
            </aside>
          </aside>
        </section>
        <section className={`h-full relative w-[249px] bg-white rounded-[10px] rounded-tl-none mr-2 max-sm:mr-4 max-sm:shrink-0 ${drawerOpen?"":"max-sm:hidden"}`}>
          {/* Please put the sidebar component inside this without changing any styles of section */}
          <Sidebar />
        </section>
        <ConversationCards loading={params.id == 1} />
      </div>
    </div>
  );
}
