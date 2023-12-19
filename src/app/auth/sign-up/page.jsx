"use client";
import RigthSignUp from "@/components/right/RigthSignUp";
import React from "react";

const signup = () => {
  return (
    <div className="flex md:flex-row">
      <div
        className="w-full md:w-1/2 bg-cover md:block hidden"
        style={{ backgroundImage: `url(/illustration.png)` }}
      ></div>
      <RigthSignUp />
    </div>
  );
};

export default Signup;
