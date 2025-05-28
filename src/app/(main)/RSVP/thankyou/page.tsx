'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import RSVPImage from '@/assets/images/RSVP.png';
import { CheckCircle } from "lucide-react";


const ThankYou = () => {
    const router = useRouter();
  
  const handleClick = () => {
    router.push("/RSVP");
  };

  return (
<div className="flex items-center justify-center px-4 py-16">
  <div className="w-full max-w-3xl text-center animate-fade-in-up">

    <p className="text-lg uppercase tracking-widest text-pink-500 mb-2">
      💖 With heartfelt gratitude
    </p>

    <p className="text-4xl md:text-5xl font-light text-gray-700 mb-2">
      Thank You So Much!
    </p>

    <button
      className="mt-8 inline-flex items-center gap-3 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition duration-300 ease-in-out rounded-full text-lg shadow-md hover:shadow-xl"
      onClick={() => handleClick()}
    >
      <CheckCircle className="text-white text-xl" />
      Submit Another Attendee
    </button>

  </div>
</div>

    
  );
};

export default ThankYou;