import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import { useRegisterUser } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #828282;
  border-radius: 3px;
  outline: none;
  margin-right: 6px;
  position: relative;

  &:checked {
    background-color: #390A75;
    border: 1px solid #390A75;
  }

  &:checked::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const RigthSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isAuthenticated, login, logout } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return name.trim().length > 0 && nameRegex.test(name);
  };

  const validateUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return username.trim().length > 0 && usernameRegex.test(username);
  };

  const validateConfirmPassword = () => {
    return password === confirmPassword;
  };

  const registerUserMutation = useRegisterUser();

  const router = useRouter()

  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validateName()) {
      alert('Name must be at least 1 character and include letters only');
      return;
    }

    if (!validateUsername()) {
      alert('Username must be at least 1 character and include letters, numbers');
      return;
    }

    if (!validatePassword()) {
      alert('Password must be at least 8 characters and include letters, numbers, and symbols');
      return;
    }

    if (!validateConfirmPassword()) {
      alert('Password and Confirm Password must match');
      return;
    }

    console.log({
      Email: email,
      Username: username,
      Name: name,
      Password: password
    });

    try {
      setLoadingOverlay(true);
      const { data } = await registerUserMutation.mutateAsync({
        username,
        password,
        email,
        name,
      });

      // Store the token in local storage
      localStorage.setItem('token', data.token);

      // Navigate to the home page
      router.push('/home');
      login();

      // Handle successful registration, e.g., store token, redirect, etc.
      console.log('User registered successfully:', data);
      setModalContent({
        type: 'success',
        message: 'Registration successful!',
      });
    } catch (error) {
      // Handle registration failure
      console.log(error);
        console.error('Registration error:', error.message);
        setModalContent({
          type: 'error',
          message: error.message || 'An error occurred during registration.',
        });
    }
    finally {
      // Hide loading overlay after the mutation is complete
      setLoadingOverlay(false);
    }
  };

  const closeModal = () => {
    setModalContent(null);
    // Reset mutation state
    registerUserMutation.reset();
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full md:w-1/2 flex justify-center items-center font-sans mt-10 md:mt-3'>
      {loadingOverlay && (
        <Overlay>
          <p>Loading...</p>
        </Overlay>
      )}

      {modalContent && (
        <Overlay>
          <ModalContent>
            <p style={{ color: modalContent.type === 'success' ? 'green' : 'red' }}>
              {modalContent.message}
            </p>
            <button onClick={closeModal}>OK</button>
          </ModalContent>
        </Overlay>
      )}
      <div className='text-center w-4/5'>
        <div className='flex items-center mb-4'>
          <img src='/logo.png' alt='Company Logo' className='h-16 mx-2 mb-2' />
          <p style={{ color: "#390A75" }} className='mb-0 font-bold text-2xl md:text-3xl lg:text-4xl'>Hitch</p>
        </div>

        <h1 style={{ color: "#525252" }} className='text-xl md:text-2xl lg:text-3xl font-bold text-left'>Signup to Your Account</h1>

        <h3 style={{ color: "#525252" }} className='text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 text-left'>
          See what is going on with your business
        </h3>

        <button className='h-10 rounded-md  border border-0.5 border-radius-9 px-2 md:px-4 py-1 md:py-2 mb-4 md:mb-6 lg:mb-8 flex items-center justify-center w-full'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABI1BMVEX////qQzU0qFNChfT7vAWFr/g7gfSQs/gnefPqQTP7ugDpOCgwp1DpPC0npUrqPzHzmpT7vwD7393pNSP85eP97+7+9vb50M3rT0LrSDrvc2r4w8D3vLjub2X62df0o53sWlDwfnbxh3/+7b/8zmP+8tf92oP7wi393Zf8yDr//ff+8Mj94JP81HZMi/Tr8v7/+uv94KS1yvpPs2nd8OJ3pPeUzqKHyphbtnLp9eztY1j1sKvpLRj3qjHsUCv5rwzvaCrxfSb3nhTuXSzpNjj0jB31kwDzmIWev/na5/3C1fvN3vy+sxaesjJsrUTB4smstC6LsDdblfXcuRhVrEqt2rhrrME7n4s3oXdBit88krxzwYc7maM/jdQ+l7A4pW8vi8MS574kAAAERUlEQVRoge2W63faNhjGjeLSIssy1CQ2UIIhSbsmG2y1uSZbt16zJCu9sW5jt///r5hsIJZlyZYvPfuwPR84hyP7x8Oj930lRflfhXTQbN4najb3S+Za54N217HtVqVlO4v2oGeV9AtWb2Gamq4bRi2QYei6Zl449c5BQfJh3alpRq0Sl6Hp9sAqwO/0NT45UM3QzHYnH/mgY5u6kLzl62brQQ72YVczksnbePSuldV2PdU15b6eKXqrpUmiA7xmH8qze4ZUIlQ2lXPZSPpmBttb8+ZAit1caFnRAb0vEXw+NoHXJdgVPRdbk2EvcrJ76Wyl+/kyUfpiNhmHeiAyHHP5PjdFaEMzbKfbHwz6bceuaZHsaqYM24p52pEvFj2ruXts3zrvXoSDRy6TA5vbl6S56/fZZ/frznZAyGWi9LiB65U690jbrwdFK5eJcshretJ4TdELzbZZk6pvojanwo1W4kDqGXKZKB3O/Na1lHPggZxv5dvv4mxHGEk2HcGn37OZ2LEiyalj2FB/eBHdy7LYJypR4xnNNvIc61w9hAH96fNbuCZ3tMjoUQBXw2gMu7T75pm6U+PltqlLC0X5Aob0Z35NGk5pbOVxCFcbkNSklvMOyNEpxfb10liUd8M/Y+CNV69LYytfMnAVngieHN+R0iX1ylcMHDZENu5VpTSkXjlm4cdC+J6UhqPbN75+zMK/KQjf+zGEP2LhR0Xh17dvnDTYDT0rCK9eUXCGrYqKpQQ4LA5/8u/AS4iFhpe+oSG8/FKkNvQzNFEIL7/9qSbKMrjk2MOw/TOMXP5UjMPDwRU7LODNRAC/c5encQxOvRI95qD6E5rNRcHwdMl4r47pVbpcYOMNAHiZBT5m4XfpVepqAW8QAAC5GdgjNpXqNb18eymC8K3Pzmb9SWxHR5H1bY/CxjuwURbr71nj4+j65iIKP3wEO+FpbuPVy+gDJ2HcOyHJYEas8b1718wjxxCq7wAthD0pOFsqROwjR/DDGxAVcmXo8d1kUyG6+QhYITe9la5itul7xU5LFIMDhNK8s73JqZVAax4drJLQIw6b6aCtPByHk11di6PxfuZMYK5xRZnw6ACDCR/vTTD+NIxvJ884EeAE45t3OXhvSn4W4F9+TRyIlHh7usHj9WoZ/oC3nLgYo83/+i1KH44EcGXFDWbDB667nhKtZy75hsKF3+loqDtFTGsh3a9LRP6C/8lsChW8MJRAswS6SBj8saVX3wtDCeJ0BbknCYE/hb0Z0ZxfMil0/GmvypmGcXqeZAD+i0RzlcbOS0fg74RCCXWaVDNCuPShu2LLLVV4Jney+FqCTOYTxxtHEyxvHicPZo68mSQegWkm2xst3XQ8GQgZ0o7i1ziRT8bZNCfalzdxkYBPyDPBOZLB/mqG8WYcos1sRMH39aqAaVreyp/jrm/YdWfr6aQs8E6nc8/XfF40iv+8/gE55IDuidhvOwAAAABJRU5ErkJggg==" alt="Google Logo" className="w-4 h-4 md:w-6 md:h-6 mr-2" />
            <span style={{color: "#828282"}} className='text-xs md:text-sm lg:text-base'>Continue with Google</span>
        </button>

        <div className='mb-6 grid-cols-1 grid md:grid-cols-2 grid gap-4'>
          <div className='col-span-full'>
            <label htmlFor='name' style={{ color: "#828282" }} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              className='h-10 focus:outline-none focus:border rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div style={{ gridColumn: isMobile ? 'span 2' : 'initial' }}>
            <label htmlFor='email' style={{ color: "#828282" }} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              className='h-10 focus:outline-none focus:border rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div style={{ gridColumn: isMobile ? 'span 2' : 'initial' }}>
            <label htmlFor='username' style={{ color: "#828282" }} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Username</label>
            <input
              type='text'
              id='username'
              placeholder='Enter your username'
              className='h-10 focus:outline-none focus:border rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div style={{ gridColumn: isMobile ? 'span 2' : 'initial' }}>
            <label htmlFor='password' style={{ color: "#828282" }} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              className='h-10 focus:outline-none focus:border rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div style={{ gridColumn: isMobile ? 'span 2' : 'initial' }}>
            <label htmlFor='confirmPassword' style={{ color: "#828282" }} className='block text-left text-xs md:text-sm lg:text-base font-bold mb-1'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm your password'
              className='h-10 focus:outline-none focus:border rounded-md border p-2 w-full text-xs md:text-sm lg:text-base'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className='flex items-center mb-4 col-span-2'>
            <Checkbox type='checkbox' className='mr-2' />
            <span style={{ color: "#A1A1A1" }} className='text-xs md:text-sm lg:text-base'>Remember me</span>
            <a href='/' style={{ color: "#390A75" }} className='ml-auto font-bold text-xs md:text-sm lg:text-base'>Forgot Password?</a>
          </div>
        </div>
        <button
            type='submit'
            onClick={handleSubmit}
            className='rounded-md mb-[20px] bg-purple-800 text-white px-2 md:px-4 py-1 md:py-2 w-full text-xs md:text-sm lg:text-base'
          >
            {registerUserMutation.isLoading ? 'Signing up...' : 'Signup'}
        </button>

        <p className='text-xs mb-[10px] md:text-sm lg:text-base'>
          Registered Already? <a href='/auth/sign-in' style={{ color: "#390A75" }} className='font-bold'>Login</a>
        </p>
      </div>
    </div>
  );
};

export default RigthSignUp;