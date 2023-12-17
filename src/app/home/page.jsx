"use client"
import React, { useEffect, useState } from 'react'
import CTA from '@/components/CTA/CTA.jsx';
import HeroSection from '@/components/HeroSection.jsx';

import ScrollTrigger from 'react-scroll-trigger';
import Navbar from '@/components/navbar/Navbar';
export default function page() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 641);
    const [isVisible, setIsVisible] = useState(false);
    function onEnterViewport() {
        setIsVisible(false);
    }
    function onExitViewport() {
        setIsVisible(true);
    }
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 641);
        };


        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                {console.log(isVisible)}
                {isVisible ? (
                    <>
                    {isSmallScreen ? (<Navbar hitchColor="text-primary" dropDownBg="bg-white" displayType='fixed' navbarBg='bg-white' navbarShadow='shadow-md' itemColor='text-primary' itemColorOnHover="hover:text-white" sideButtonColor='black' roundedDepth='rounded-0' />
                    ) : (<Navbar displayType='fixed' navbarBg='bg-white' navbarShadow='shadow-md' hitchColor="text-primary" itemColor='text-text' itemColorOnHover='hover:text-black' />
                    )}
                </>
                ) : (
                    <>
                        {isSmallScreen ? (<Navbar hitchColor="text-[#FFC728]" displayType='relative' navbarBg='bg-transparent' navbarShadow='shadow-0' itemColor='text-white' itemColorOnHover="text-white" sideButtonColor='white' />
                        ) : (<Navbar displayType='relative' navbarBg='bg-transparent' navbarShadow='shadow-0' hitchColor="text-primary" itemColor='text-text' itemColorOnHover='hover:text-black' />
                        )}
                    </>
                )}

            </ScrollTrigger>


            <HeroSection />
            <CTA />
        </>

    )
}