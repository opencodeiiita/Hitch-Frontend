'use client'
import RigthSignUp from '@/components/right/RigthSignUp';
import React, { useState } from 'react';
import styled, { css } from "styled-components";

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
    background-color: #390A75; // Change this to your desired color
    border: 1px solid #390A75; // Change this to your desired color
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


const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

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

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    // Password should have at least 8 characters and contain a combination of letters, numbers, and symbols
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validateName()) {
      alert('Name must be at least 1 characters and include letters only');
      return;
    }

    if (!validateUsername()) {
      alert('UserName must be at least 1 characters and include letters, numbers');
      return;
    }

    if (!validatePassword()) {
      alert('Password must be at least 8 characters and include letters, numbers, and symbols');
      return;
    }

    console.log({
      Email: email,
      Username: username,
      Name: name,
      Password: password
    })
  };

  return (
    <div className='flex md:flex-row'>
      <div className='w-full md:w-1/2 bg-cover md:block hidden' style={{ backgroundImage: `url(/illustration.png)` }}>
      </div>
      <RigthSignUp/>
    </div>
  );
}

export default signup;