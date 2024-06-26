"use client";
import React from "react";
const ProfileCard = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-transparent rounded-lg shadow-md p-7">
      <div className="w-28 h-28 bg-cover bg-center bg-no-repeat bg-[url('/ilham.svg')] rounded-full mx-auto"></div>
      <h2 className="text-center text-2xl font-semibold mt-3 text-white">Ilham Suryana</h2>
      <p className="text-center text-gray-400 mt-1">Software Engineer</p>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          Twitterz
        </a>
        <a href="https://www.linkedin.com/in/ilham-suryana-03318b265/" className="text-blue-500 hover:text-blue-700 mx-3">
          LinkedIn
        </a>
        <a href="https://github.com/szuryanailham" className="text-blue-500 hover:text-blue-700 mx-3">
          GitHub
        </a>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-white text-center">Bio</h3>
        <p className="text-gray-400 mt-2 text-center max-w-prose">ilham Suryana is a software engineer with over 2 years of experience in developing web aplication. He is skilled in JavaScript, React, and Node.js,laravel dan next js.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
