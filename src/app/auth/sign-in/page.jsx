'use client'
import * as React from "react";
import { useState } from "react";
const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validatePassword()) {
      alert('Password must be at least 8 characters and include letters, numbers, and symbols');
      return;
    }
  };

  return (
   <div className='flex md:flex-row h-screen'>
      <div className='w-full md:w-1/2 bg-cover md:block hidden' style={{ backgroundImage: `url(/illustration.png)` }}>
      </div>

      <div className='w-full md:w-1/2 flex justify-center items-center font-sans mt-10 md:mt-3'>
        <div className='text-center w-4/5'>
          <div className='flex items-center mb-4'>
            <img src='/logo.png' alt='Company Logo' className='h-16 w-16 mx-2 mb-2' />

            <p style={{color: "#390A75"}} className='mb-0 font-bold text-2xl md:text-3xl lg:text-4xl'>Hitch</p>
          </div>

          <h1 style={{color: "#525252"}} className='text-xl md:text-2xl lg:text-3xl font-bold text-left'>Login to Your Account</h1>

          <h3 style={{color: "#525252"}} className='text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-left'>
            See what is going on with your business
          </h3>

          <button className='rounded-md  border border-0.5 border-radius-9 px-2 md:px-4 py-1 md:py-2 mb-4 md:mb-6 lg:mb-8 flex items-center justify-center w-full'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABI1BMVEX////qQzU0qFNChfT7vAWFr/g7gfSQs/gnefPqQTP7ugDpOCgwp1DpPC0npUrqPzHzmpT7vwD7393pNSP85eP97+7+9vb50M3rT0LrSDrvc2r4w8D3vLjub2X62df0o53sWlDwfnbxh3/+7b/8zmP+8tf92oP7wi393Zf8yDr//ff+8Mj94JP81HZMi/Tr8v7/+uv94KS1yvpPs2nd8OJ3pPeUzqKHyphbtnLp9eztY1j1sKvpLRj3qjHsUCv5rwzvaCrxfSb3nhTuXSzpNjj0jB31kwDzmIWev/na5/3C1fvN3vy+sxaesjJsrUTB4smstC6LsDdblfXcuRhVrEqt2rhrrME7n4s3oXdBit88krxzwYc7maM/jdQ+l7A4pW8vi8MS574kAAAERUlEQVRoge2W63faNhjGjeLSIssy1CQ2UIIhSbsmG2y1uSZbt16zJCu9sW5jt///r5hsIJZlyZYvPfuwPR84hyP7x8Oj930lRflfhXTQbN4najb3S+Za54N217HtVqVlO4v2oGeV9AtWb2Gamq4bRi2QYei6Zl449c5BQfJh3alpRq0Sl6Hp9sAqwO/0NT45UM3QzHYnH/mgY5u6kLzl62brQQ72YVczksnbePSuldV2PdU15b6eKXqrpUmiA7xmH8qze4ZUIlQ2lXPZSPpmBttb8+ZAit1caFnRAb0vEXw+NoHXJdgVPRdbk2EvcrJ76Wyl+/kyUfpiNhmHeiAyHHP5PjdFaEMzbKfbHwz6bceuaZHsaqYM24p52pEvFj2ruXts3zrvXoSDRy6TA5vbl6S56/fZZ/frznZAyGWi9LiB65U690jbrwdFK5eJcshretJ4TdELzbZZk6pvojanwo1W4kDqGXKZKB3O/Na1lHPggZxv5dvv4mxHGEk2HcGn37OZ2LEiyalj2FB/eBHdy7LYJypR4xnNNvIc61w9hAH96fNbuCZ3tMjoUQBXw2gMu7T75pm6U+PltqlLC0X5Aob0Z35NGk5pbOVxCFcbkNSklvMOyNEpxfb10liUd8M/Y+CNV69LYytfMnAVngieHN+R0iX1ylcMHDZENu5VpTSkXjlm4cdC+J6UhqPbN75+zMK/KQjf+zGEP2LhR0Xh17dvnDTYDT0rCK9eUXCGrYqKpQQ4LA5/8u/AS4iFhpe+oSG8/FKkNvQzNFEIL7/9qSbKMrjk2MOw/TOMXP5UjMPDwRU7LODNRAC/c5encQxOvRI95qD6E5rNRcHwdMl4r47pVbpcYOMNAHiZBT5m4XfpVepqAW8QAAC5GdgjNpXqNb18eymC8K3Pzmb9SWxHR5H1bY/CxjuwURbr71nj4+j65iIKP3wEO+FpbuPVy+gDJ2HcOyHJYEas8b1718wjxxCq7wAthD0pOFsqROwjR/DDGxAVcmXo8d1kUyG6+QhYITe9la5itul7xU5LFIMDhNK8s73JqZVAax4drJLQIw6b6aCtPByHk11di6PxfuZMYK5xRZnw6ACDCR/vTTD+NIxvJ884EeAE45t3OXhvSn4W4F9+TRyIlHh7usHj9WoZ/oC3nLgYo83/+i1KH44EcGXFDWbDB667nhKtZy75hsKF3+loqDtFTGsh3a9LRP6C/8lsChW8MJRAswS6SBj8saVX3wtDCeJ0BbknCYE/hb0Z0ZxfMil0/GmvypmGcXqeZAD+i0RzlcbOS0fg74RCCXWaVDNCuPShu2LLLVV4Jney+FqCTOYTxxtHEyxvHicPZo68mSQegWkm2xst3XQ8GQgZ0o7i1ziRT8bZNCfalzdxkYBPyDPBOZLB/mqG8WYcos1sRMH39aqAaVreyp/jrm/YdWfr6aQs8E6nc8/XfF40iv+8/gE55IDuidhvOwAAAABJRU5ErkJggg==" alt="Google Logo" className="w-4 h-4 md:w-6 md:h-6 mr-2" />
            <span style={{color: "#828282"}} className='text-xs md:text-sm lg:text-base'>Continue with Google</span>
          </button>

          <p style={{color: "#A1A1A1"}} className='mb-2 md:mb-4 lg:mb-6 text-xs md:text-sm lg:text-base'>------------- or Sign in with Email -------------</p>

          <form className='mb-6' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' style={{color: "#828282"}} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                className='rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' style={{color: "#828282"}} className='text-left block text-xs md:text-sm lg:text-base font-bold mb-1'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
                className='rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='flex items-center mb-4'>
              <input type='checkbox' className='mr-2' />
              <span style={{color: "#A1A1A1"}} className='text-xs md:text-sm lg:text-base'>Remember me</span>
              <a href='/' style={{color: "#390A75"}} className='ml-auto font-bold text-xs md:text-sm lg:text-base'>Forgot Password?</a>
            </div>
            <button
              type='submit'
              className='rounded-md bg-purple-800 text-white px-2 md:px-4 py-1 md:py-2 w-full text-xs md:text-sm lg:text-base'
            >
              Login
            </button>
          </form>

          <p className='text-xs md:text-sm lg:text-base'>
            Not Registered yet? <a href='/' style={{color: "#390A75"}} className='font-bold'>Create an account</a>
          </p>
        </div>
      </div>
    </div> 
  );
}

export default SignInPage;