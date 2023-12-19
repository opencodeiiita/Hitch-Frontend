"use client"
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
import Card from '@/components/workspace/Card.js'
import CreateWorkspace from '@/components/workspace/CreateWorkspace';
import Table from '@/components/workspace/Table';
import { useState, useEffect } from 'react';
import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
const page = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 641);
    const [isVisible, setIsVisible] = useState(false);
    function onEnterViewport() {
        setIsVisible(false);
    }
    function onExitViewport() {
        setIsVisible(true);
    }
    const [navbar, setNavbar] = useState(false);
    const [showModal,setShowModal] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isAuth = true;
    return (
        <>
            {showModal && <CreateWorkspace setShowModal={setShowModal} />}
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>             
            <NavBar hitchColor="text-[#FFC728]" isSignIn={isAuth} displayType='relative' navbarBg='bg-transparent' navbarShadow='shadow-0' itemColor='text-text' itemColorOnHover="hover:text-white" sideButtonColor='white' /> 
                {isVisible ? (
                    <NavBar hitchColor="text-primary" isSignIn={isAuth} dropDownBg="bg-white" displayType='fixed' navbarBg='bg-white' navbarShadow='shadow-md' itemColor='text-primary' itemColorOnHover="hover:text-primary" sideButtonColor='black' roundedDepth="lg:rounded-full"  />                 
                ) : (
                   null          
                )}
            </ScrollTrigger>

                <section className='w-full font-inter h-fit'>
                    <div className='flex flex-col justify-start items-start px-6 lg:px-48 xl:px-64 w-full h-fit'>                                        
                        <div className='lg:hidden  mt-5 w-full flex sm:items-center sm:justify-between sm:flex sm:flex-row flex-col items-start border-[6px] p-5 border-primary bg-white rounded-xl h-fit'>
                            <div className='flex text-2xl  text-primary font-bold'>
                                Want to you use Hitch for your work?
                            </div>
                            <button onClick={()=>setShowModal(true)} className='flex py-5 rounded-md px-3  mt-5 sm:mt-0 font-bold text-lg items-center border-primary border-[3px]'>
                                CREATE A NEW WORKSPACE
                            </button>
                        </div>
                        <div className='flex items-end justify-start  gap-3  mt-8 h-fit '>
                             <img 
                             src="./images/hand.svg"/>

                            <h className=' text-white font-semibold lg:text-5xl text-4xl'>
                              Welcome Back
                            </h>
                        </div>
                        <Table/>
                        <Table buttonText='Joined'/>
                    </div>
                    <aside className='absolute bg-[#1B1633] w-full h-[300vh] sm:h-[60vh] top-0 left-0 -z-20'>
                    </aside>
                    <aside className='absolute w-[73vw] h-[73vw] bg-[#8A2FFF]  -top-[20vw] -left-[20vw] sm:hidden blur-[180px] -z-10'>
                    </aside>
                </section>  

                <Footer />
        </>
    )
}

export default page
