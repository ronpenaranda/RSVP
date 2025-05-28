'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import RSVPImage from '@/assets/images/RSVP.png';
import Title from '@/assets/images/title.png';
import { CheckCircle } from "lucide-react";


const Dashboard = () => {
    const router = useRouter();
  
  const handleClick = () => {
    router.push("/RSVP");
  };

  return (
    <div>
<div className="relative flex items-center justify-center mb-20">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className=" bg-pink-200/30 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
  </div>

  <div className="relative text-center px-6 py-14 w-full ">
        <Image
          src={Title}
          alt="RSVP Invitation"
          width={500}
          height={200}
          className="mx-auto mb-6 drop-shadow-xl rounded-xl"
        />
    <p className="text-4xl text-rose-500 font-medium tracking-wide mb-4">
      You are invited!
    </p>
        <p className="text-4xl font-medium tracking-wide mb-4">
      06 - 21 - 2025
    </p>
<div className="pt-8 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 text-gray-700">

  <div className="bg-white/60 backdrop-blur-sm border border-pink-100 rounded-2xl px-6 py-5 shadow-md text-center w-full md:w-auto">
    <p className="text-sm uppercase tracking-wider text-pink-500 mb-1">Ceremony</p>
    <p className="text-2xl md:text-3xl font-semibold">⛪ Church</p>
    <p className="text-lg font-light text-gray-600 mt-1">San Antonio De Padua, Silang Cavite</p>
  </div>

  <div className="hidden md:flex items-center justify-center">
    <span className="text-4xl text-pink-400">♥</span>
  </div>

  <div className="bg-white/60 backdrop-blur-sm border border-pink-100 rounded-2xl px-6 py-5 shadow-md text-center w-full md:w-auto">
    <p className="text-sm uppercase tracking-wider text-pink-500 mb-1">Celebration</p>
    <p className="text-2xl md:text-3xl font-semibold">🥂 Reception</p>
    <p className="text-lg font-light text-gray-600 mt-1">The Pulo Events, Silang Cavite</p>
  </div>
</div>

    <p className="pt-9 text-sm mt-4 tracking-wider text-gray-600 max-w-xl mx-auto">
      We would be honored by your presence. Please confirm your attendance and let us know if you'll bring a guest.
    </p>
  </div>
</div>
      <div className="flex items-center justify-center mb-20">
      <div className="text-center px-6 py-10 w-full max-w-3xl animate-fade-in">
        <Image
          src={RSVPImage}
          alt="RSVP Invitation"
          width={500}
          height={200}
          className="mx-auto mb-6 drop-shadow-xl rounded-xl"
        />

        <p className="text-4xl md:text-5xl font-light text-gray-700 mb-2">
          We have reserved a seat
        </p>

        <h2 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-rose-400 text-transparent bg-clip-text uppercase drop-shadow-md">
          For you!
        </h2>

        <button
          className="mt-10 inline-flex items-center gap-3 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition-all duration-300 ease-in-out rounded-full text-lg shadow-lg hover:shadow-xl"
        onClick={() => handleClick()}>
          <CheckCircle className="text-white text-xl" />
          Confirm Attendance
        </button>

        <p className="text-sm mt-10 tracking-widest text-gray-600">
          Click the button above to RSVP — we can’t wait to celebrate with you!
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Dashboard;