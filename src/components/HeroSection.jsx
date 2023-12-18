"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import mobileHeroSection from "../../public/mobileHeroSection.png";
import landingPagePoster from "../../public/landingPagePoster.png";
const HeroSection = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 641);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className=' z-20'>
    
            {isSmallScreen ? (
                <section className='my-8 items-center'>

                    <Image src={mobileHeroSection} alt="Hitch Overview" className=' mx-20 my-8 mt-16 w-[60vw]' />
                    <section className='ml-[32px] mr-[16px] space-y-6 flex flex-col items-start h-fit'>

                        <text className=' font-bold text-[42px] leading-[49px] text-white'>
                            Connecting<br></br>
                            Ideas, Powering
                            <br></br> Teamwork.
                        </text>
                        <svg width="234" height="17" viewBox="0 0 234 17" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M2 14.4421C35.3211 5.05299 127.815 -8.09171 231.221 14.4421" stroke="#A47ED5" stroke-width="3.82833" stroke-linecap="round" />

                        </svg>
                        <text className='text-white text-[11px] '>
                            Let's make your work more organize and easily using <br></br>the Taskio Dashboard with many of the latest <br></br>featuresin managing work every day.
                        </text>

                        <aside className='flex space-x-3 items-center'>
                            <button className='text-primary text-[12px] font-semibold bg-[#FFC728] py-[12px] px-[30px] rounded-full '>Try free trial</button>
                            <button className='flex items-center space-x-2 hover:text-primary'>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1608 0.980377C16.9142 0.980377 21.5798 5.64499 21.5798 11.3994C21.5798 17.1539 16.9142 21.8185 11.1608 21.8185C5.40631 21.8185 0.741699 17.1539 0.741699 11.3994C0.741699 5.64499 5.40631 0.980377 11.1608 0.980377Z" stroke="#B096D2" stroke-width="0.987069" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.451 11.3941C14.451 10.5045 9.89132 7.65859 9.37408 8.17031C8.85684 8.68202 8.8071 14.058 9.37408 14.6179C9.94106 15.1799 14.451 12.2837 14.451 11.3941Z" stroke="#B096D2" stroke-width="0.987069" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className='text-[12px] text-white'>View Demo</span>
                            </button>
                        </aside>

                    </section>
                    <aside className='absolute bg-[#1B1633] w-full h-[120vh] top-0 left-0 -z-20'>
                    </aside>
                    <aside className='absolute w-[73vw] h-[73vw] bg-[#8A2FFF] -top-[20vw] -left-[20vw]  blur-[180px] -z-10'>
                    </aside>



                </section>

            ) : (
                <section className='flex flex-col-reverse lg:flex lg:flex-row mr-4 mt-16 ml-32 py-12 w-screen min-h-screen'>
                    <section className='flex flex-col z-10 '>
                        <p className='flex-shrink text-[80px] leading-[90px] font-bold'>Connecting <br>
                        </br>Ideas, Powering <br></br>Teamwork.</p>
                        <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" width="487" height="34" viewBox="0 0 487 34" fill="none">
                            <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#390A75" stroke-width="8" stroke-linecap="round" />
                        </svg>
                        <p className='text-lg font-medium max-w-md mt-10'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.</p>
                        <aside className='flex items-center mt-10 space-x-10'>
                            <button className='text-white text-lg font-medium bg-primary py-5 px-7 rounded-full hover:shadow-sm hover:shadow-primary-dark'>Try free trial</button>
                            <button className='flex items-center space-x-3 hover:text-primary'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.16666C25.7432 1.16666 32.8334 8.25525 32.8334 17C32.8334 25.7447 25.7432 32.8333 17 32.8333C8.25527 32.8333 1.16669 25.7447 1.16669 17C1.16669 8.25525 8.25527 1.16666 17 1.16666Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16.9919C22 15.64 15.0709 11.3152 14.2849 12.0928C13.4988 12.8705 13.4233 21.0401 14.2849 21.891C15.1465 22.7449 22 18.3438 22 16.9919Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className='text-lg font-medium'>View Demo</span>
                            </button>
                        </aside>
                    </section>
                    <Image src={landingPagePoster} alt="Hitch Overview" className='flex lg:mb-0 mb-24 h-[526px]' />
                    {/* For blur effect */}
                    <aside className='absolute overflow-x-hidden w-[99vw] h-[90vh] top-0 left-0 bg-gradient-to-r from-primary/20 to-white blur-2xl -z-20'></aside>
                    <aside className='absolute w-96 h-96 rounded-full bg-white top-1/3 right-1/3 blur-3xl -z-10'></aside>
                    <aside className='absolute w-[500px] h-96 rounded-full bg-white -top-20 left-[55%] blur-2xl  -z-10'></aside>
                    <aside className='absolute w-96 h-96 rounded-full bg-primary/20 right-0 top-2/3 blur-2xl -z-10 overflow-x-hidden'></aside>
                </section>
            )}
            </div>
            )

}

export default HeroSection
