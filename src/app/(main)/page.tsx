'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import RSVPImage from '@/assets/images/RSVP.png';
import { CheckCircle } from "lucide-react";


const Dashboard = () => {
    const router = useRouter();
  
  const handleClick = () => {
    router.push("/RSVP");
  };

  return (
    <div>
      <div className="flex items-center justify-center">
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

        <p className="text-sm uppercase mt-10 tracking-widest text-gray-600">
          Click the button above to confirm and let us know if you're bringing a guest.
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Dashboard;