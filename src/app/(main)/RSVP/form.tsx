'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckCircle } from "lucide-react";
import { AddGuest } from "../action/rsvp.action";
import { useActionHandler } from "@/hooks/useActionHandler";

export default function GuestForm() {
  const { execute, isPending } = useActionHandler(AddGuest)
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    const res = execute({
    fullname: name,
    remarks: "aattend",
    });

    console.log(res)

    if(!res){
        console.log("error")
    }

  };

  return (
    <div>
      <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-9" noValidate>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            className="w-full rounded-lg px-5 py-3 text-gray-900 placeholder-gray-400 ring-1 ring-gray-300
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

        <button
          className="w-full mt-10 justify-center inline-flex items-center gap-3 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition-all duration-300 ease-in-out rounded-xl text-lg shadow-lg hover:shadow-xl"
        >
          <CheckCircle className="text-white text-xl" />
          Confirm Attendance
        </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          Click the button above to confirm. We can't wait to see you!
        </p>
      </div>
    </div>
  );
}
