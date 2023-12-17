"use client"
import React, { useEffect, useState } from 'react'
import CTA from '@/components/CTA';
import HeroSection from '@/components/HeroSection.jsx';
import NavBar from '@/components/navbar/NavBar';
import NavbarMobile from '@/components/navbar/NavbarMobile';
export default function page() {
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
            {isSmallScreen?(<NavbarMobile/>
            ):(<NavBar />
            )}
            
            <HeroSection />
            <CTA />
        </>

    )
}
