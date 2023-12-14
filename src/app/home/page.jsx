import React from 'react'
import Image from 'next/image'
import landingPagePoster from "../../../public/landingPagePoster.png";
import NavBar from '@/components/NavBar';
import CTA from '@/components/CTA';

export default function page () {
  return (
    <div className=' overflow-x-hidden z-20'>
        <NavBar />
        <section className='flex mr-4 mt-32 ml-32 pb-40'>
            <section className='flex flex-col z-10 '>
                <p className='text-[80px] leading-[90px] font-bold'>Connecting Ideas, Powering Teamwork.</p>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" width="487" height="34" viewBox="0 0 487 34" fill="none">
                    <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#390A75" stroke-width="8" stroke-linecap="round"/>
                </svg>
                <p className='text-lg font-medium max-w-md mt-10'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>
                <aside className='flex items-center mt-10 space-x-10'>
                    <button className='text-white text-lg font-medium bg-primary py-5 px-7 rounded-full hover:shadow-sm hover:shadow-primary-dark'>Try free trial</button>
                    <button className='flex items-center space-x-3 hover:text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.16666C25.7432 1.16666 32.8334 8.25525 32.8334 17C32.8334 25.7447 25.7432 32.8333 17 32.8333C8.25527 32.8333 1.16669 25.7447 1.16669 17C1.16669 8.25525 8.25527 1.16666 17 1.16666Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16.9919C22 15.64 15.0709 11.3152 14.2849 12.0928C13.4988 12.8705 13.4233 21.0401 14.2849 21.891C15.1465 22.7449 22 18.3438 22 16.9919Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span className='text-lg font-medium'>View Demo</span>
                        </button>
                </aside>
            </section>
            <Image src={landingPagePoster} alt="Hitch Overview" />
            {/* For blur effect */}
            <aside className='absolute overflow-x-hidden w-[99vw] h-[90vh] top-0 left-0 bg-gradient-to-r from-primary/20 to-white blur-2xl -z-20'></aside>
            <aside className='absolute w-96 h-96 rounded-full bg-white top-1/3 right-1/3 blur-3xl -z-10'></aside>
            <aside className='absolute w-[500px] h-96 rounded-full bg-white -top-20 left-[55%] blur-2xl  -z-10'></aside>
            <aside className='absolute w-96 h-96 rounded-full bg-primary/20 right-0 top-2/3 blur-2xl -z-10 overflow-x-hidden'></aside>
        </section>
        <CTA />
    </div>
  )
}
