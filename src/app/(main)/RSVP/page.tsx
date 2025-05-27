'use client'
import React from 'react'
import GuestForm from './form'
import Image from 'next/image';
import RSVPImage from '@/assets/images/RSVP.png';

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center px-6 py-10 w-full max-w-3xl animate-fade-in">
        <Image
          src={RSVPImage}
          alt="RSVP Invitation"
          width={500}
          height={200}
          className="mx-auto mb-6 drop-shadow-xl rounded-xl"
        />
        <GuestForm/>
        </div>
    </div>
  )
}

export default Page