"use client";
import React, { useState } from 'react';

import {  XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
const Navbar = ({ sideButtonColor="black",dropDownBg="bg-primary" ,roundedDepth="rounded-full",hitchColor="bg-primary" ,displayType="fixed", navbarBg="bg-white", navbarShadow="shadow-md" , itemColor="text-text" ,itemColorOnHover="text-black", signUpBg="bg-primary" }) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Blog", link: "/" },
    { name: "About Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className={`w-full ${displayType} top-0 left-0 font-inter z-50`}>
      <div className= {` animate lg:flex items-center justify-between ${navbarBg} ${roundedDepth} py-3 lg:py-1 lg:my-2 lg:px-10 px-3 lg:mx-14  ${navbarShadow}`} >

        <div className={` font-semibold text-3xl lg:text-4xl ${hitchColor} cursor-pointer flex items-center gap-1`}>
          <img src="./images/logo.svg"
            className='w-10 h-10 lg:w-14 lg:h-14 '
          />
          <span>Hitch</span>
        </div>
      
        
        <div onClick={()=>setOpen(!open)} className='absolute right-4 top-4  cursor-pointer lg:hidden w-8 h-8'>
                {
                    open ? <XMarkIcon color={`${sideButtonColor}`}/> : <Bars3Icon  color={`${sideButtonColor}`}/>
                }
            </div>
       
        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 mt-2 lg:mt-0 absolute lg:static ${dropDownBg} lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
                    {
            Links.map((link) => (
              <li className='lg:ml-8 lg:my-0 my-7 '>
                <a href={link.link} className={`${itemColor} ${itemColorOnHover} hover:font-semibold hover:duration-0 duration-500`}>{link.name}</a>
              </li>))
          }
          {!open ? (
            <>
              <button className={'btn  hover:text-[#000000] hover:font-semibold hover:duration-0  text-text lg:ml-28  px-3 py-1 rounded duration-500 lg:static '}>Login</button>
              <button className={`btn ${signUpBg} text-white lg:ml-3 rounded-lg px-3 py-2 duration-500 hover:font-semibold hover:duration-0 lg:static`}>Sign Up</button>
            </>
          ) : (null)}

        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;