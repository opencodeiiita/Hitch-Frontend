'use client'
import React from 'react';
import RightSignIn from '@/components/right/RightSignIn';



const SignInPage = () => {
  return (
    <div className='flex md:flex-row'>
      <div className='w-full md:w-1/2 bg-cover md:block hidden' style={{ backgroundImage: `url(/illustration.png)` }}>
      </div>
      <RightSignIn/>
    </div>
  );
}

export default SignInPage;