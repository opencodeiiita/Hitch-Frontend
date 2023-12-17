"use client"
import NavbarMobile from '@/components/navbar/NavbarMobile';
import Card from '@/components/workspace/Card.js'
import { useState, useEffect } from 'react';
import React from 'react';
const page = () => {
    const [navbar, setNavbar] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 641);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>

            {isSmallScreen ? (
                <div className='w-full h-[200vw]'>

                    <div className='bg-[#1D0E2F] absolute w-full h-fit'>
                        
                        <NavbarMobile />
                        <div className='mx-6 mt-5 flex flex-col items-start border-[6px] p-5 border-primary bg-white rounded-xl h-fit'>

                            <div className='flex text-2xl  text-primary font-bold'>
                                Want to you use Hitch for your work?
                            </div>
                            <button className='flex py-5 rounded-md px-3  mt-5 font-bold text-lg items-center border-primary border-[3px]'>
                                CREATE A NEW WORKSPACE
                            </button>


                        </div>

                        <div className='flex items-start px-1 gap-3 mx-6 mt-8 h-fit'>
                            <h className='flex text-white font-semibold  text-4xl'>
                                👋 Welcome Back
                            </h>
                        </div>
                        <div className='flex flex-col items-center rounded-t-xl mx-6 mt-8  h-fit bg-white '>
                            <div className='flex items-center justify-between w-full p-5 text-white text-lg font-semibold rounded-t-lg bg-[#390A75] h-fit '>
                                Workspace for akshaywaghmarecc@gmail.com
                            </div>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-[200vw]'>
                    <div className='bg-[#1D0E2F] absolute w-full h-[65vw] xl:h-[40vw]'>
                   
                        <nav className='mr-32 ml-24 pt-5 box-content flex justify-between items-center top-0 bg-[#1D0E2F] sticky p-5'>

                            <img src="./images/logo.svg" className='w-20 h-20' />
                            <svg width="123" height="40" viewBox="0 0 123 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.586648 39V2.63636H7.17401V18.0305H24.0241V2.63636H30.6293V39H24.0241V23.5526H7.17401V39H0.586648ZM37.5096 39V11.7273H43.9371V39H37.5096ZM40.7411 7.85653C39.7231 7.85653 38.8472 7.51918 38.1133 6.84446C37.3794 6.15791 37.0124 5.33523 37.0124 4.37642C37.0124 3.40578 37.3794 2.58309 38.1133 1.90838C38.8472 1.22183 39.7231 0.87855 40.7411 0.87855C41.771 0.87855 42.6469 1.22183 43.369 1.90838C44.1029 2.58309 44.4698 3.40578 44.4698 4.37642C44.4698 5.33523 44.1029 6.15791 43.369 6.84446C42.6469 7.51918 41.771 7.85653 40.7411 7.85653ZM64.1653 11.7273V16.6989H48.487V11.7273H64.1653ZM52.3578 5.19318H58.7853V30.7969C58.7853 31.661 58.9155 32.3239 59.176 32.7855C59.4482 33.2353 59.8033 33.5431 60.2413 33.7088C60.6793 33.8745 61.1646 33.9574 61.6973 33.9574C62.0997 33.9574 62.4667 33.9278 62.7981 33.8686C63.1414 33.8094 63.4018 33.7562 63.5794 33.7088L64.6625 38.7337C64.3192 38.852 63.8279 38.9822 63.1887 39.1243C62.5614 39.2663 61.792 39.3492 60.8805 39.3729C59.2707 39.4202 57.8206 39.1776 56.5304 38.6449C55.2401 38.1004 54.2162 37.2599 53.4586 36.1236C52.7129 34.9872 52.3459 33.5668 52.3578 31.8622V5.19318ZM81.1442 39.5327C78.4216 39.5327 76.0838 38.9349 74.1307 37.7393C72.1894 36.5438 70.692 34.8925 69.6385 32.7855C68.5968 30.6667 68.076 28.2282 68.076 25.4702C68.076 22.7003 68.6087 20.2559 69.674 18.1371C70.7393 16.0064 72.2427 14.3492 74.1839 13.1655C76.1371 11.9699 78.4453 11.3722 81.1087 11.3722C83.3222 11.3722 85.2813 11.7805 86.9858 12.5973C88.7022 13.4022 90.0694 14.5445 91.0874 16.0241C92.1054 17.492 92.6854 19.2083 92.8274 21.1733H86.6839C86.4354 19.8594 85.8435 18.7644 84.9084 17.8885C83.9851 17.0007 82.7481 16.5568 81.1974 16.5568C79.8835 16.5568 78.7294 16.9119 77.7351 17.6222C76.7408 18.3205 75.9654 19.3267 75.4091 20.6406C74.8646 21.9545 74.5923 23.5289 74.5923 25.3636C74.5923 27.2221 74.8646 28.8201 75.4091 30.1577C75.9536 31.4834 76.7171 32.5073 77.6996 33.2294C78.6939 33.9396 79.8598 34.2947 81.1974 34.2947C82.1444 34.2947 82.9908 34.1172 83.7365 33.7621C84.4941 33.3951 85.1274 32.8684 85.6364 32.1818C86.1454 31.4953 86.4946 30.6607 86.6839 29.6783H92.8274C92.6735 31.6077 92.1054 33.3182 91.1229 34.8097C90.1404 36.2893 88.8028 37.4493 87.1101 38.2898C85.4174 39.1184 83.4287 39.5327 81.1442 39.5327ZM104.533 23.0199V39H98.1053V2.63636H104.391V16.3615H104.71C105.35 14.8227 106.338 13.6094 107.676 12.7216C109.025 11.822 110.741 11.3722 112.825 11.3722C114.719 11.3722 116.37 11.7687 117.779 12.5618C119.187 13.3549 120.276 14.5149 121.046 16.0419C121.827 17.5689 122.218 19.4332 122.218 21.6349V39H115.79V22.6293C115.79 20.7945 115.316 19.3681 114.369 18.3501C113.434 17.3203 112.12 16.8054 110.428 16.8054C109.291 16.8054 108.273 17.054 107.374 17.5511C106.486 18.0365 105.788 18.7408 105.279 19.6641C104.781 20.5874 104.533 21.706 104.533 23.0199Z" fill="#FFC728" />
                            </svg>


                            <button onClick={() => setNavbar(!navbar)} class="relative lg:hidden">

                                <svg width="37" height="34" viewBox="0 0 99 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 74H94M5 39H49.5H71.75H94" stroke="white" stroke-width="10" stroke-linecap="round" />
                                    <path d="M5 5H94" stroke="white" stroke-width="10" stroke-linecap="round" />
                                </svg>


                            </button>


                            <div className='hidden lg:flex-grow lg:flex lg:justify-end items-center space-x-10 '>
                                <span className='text-white font-medium hover:cursor-pointer hover:text-white'>Home</span>
                                <span className='text-text font-medium hover:cursor-pointer hover:text-white'>Product</span>
                                <span className='text-text font-medium hover:cursor-pointer hover:text-white'>FAQ</span>
                                <span className='text-text font-medium hover:cursor-pointer hover:text-white'>Blog</span>
                                <span className='text-text font-medium hover:cursor-pointer hover:text-white'>About us</span>

                                <section className=' text space-x-2'>
                                    <button className='bg-white rounded-xl font-medium p-2 text-primary'>Create New Workspace</button>

                                </section>
                            </div>
                        </nav>
                        {navbar ? (
                            <div class="absolute bg-[#1D0E2F] w-full ">
                                <div className="py-3 px-10 pb-5 mt-4 mx-24 h-fit flex flex-col  space-y-4">
                                    <span className='text-white  text-xl hover:cursor-pointer hover:text-white'>Home</span>
                                    <span className='text-text text-xl hover:cursor-pointer hover:text-white'>Product</span>
                                    <span className='text-text text-xl hover:cursor-pointer hover:text-white'>FAQ</span>
                                    <span className='text-text text-xl hover:cursor-pointer hover:text-white'>Blog</span>
                                    <span className='text-text text-xl hover:cursor-pointer hover:text-white'>About us</span>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}




                        <div className='flex-start flex-row mt-[5vw] mx-[14.5vw] h-fit '>
                            <h className='text-white font-semibold  text-3xl sm:text-5xl lg:text-7xl'>
                                👋 Welcome Back
                            </h>
                        </div>
                        <div className='flex-col items-center rounded-xl mx-[14.5vw] mt-[3vw]  h-fit border-8 border-primary bg-white '>
                            <div className='flex-row flex items-center justify-between bg-[#390A75] h-fit p-2 m-1 rounded-t-md'>
                                <div className='flex-shrink text-white text-md md:text-lg lg:text-lg font-semibold mx-4 py-3'>
                                    Workspace for akshaywaghmarecc@gmail.com
                                </div>

                                <button className='flex-shrink text-primary  font-bold bg-[#FFC728] w-fit h-fit text-sm sm:text-sm md:text-md lg:text-lg rounded-3xl mx-3 p-2'>
                                    Joined Workspaces
                                </button>
                            </div>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className='flex-col items-center rounded-xl mx-[14.5vw] mt-[4vw] bg-white h-fit border-8 border-primary '>
                            <div className='flex-row flex items-center justify-between bg-[#390A75] h-fit p-2 m-1 rounded-t-md'>
                                <div className='flex-shrink text-white text-sm sm:text-md md:text-lg lg:text-lg font-semibold mx-4 py-3'>
                                    Workspace for akshaywaghmarecc@gmail.com
                                </div>

                                <button className='flex-shrink text-primary  font-bold bg-[#FFC728] w-fit h-fit text-sm sm:text-sm md:text-md lg:text-lg rounded-3xl mx-3 p-2'>
                                    Created Workspaces
                                </button>
                            </div>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        


                        </div>
                    </div>

            )}
        </>
    )
}

export default page
