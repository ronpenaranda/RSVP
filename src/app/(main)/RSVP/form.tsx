'use client';

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { AddGuest } from "../action/rsvp.action";
import { useActionHandler } from "@/hooks/useActionHandler";

export default function GuestForm() {
  const router = useRouter();
  const { execute, isPending } = useActionHandler(AddGuest);
  const [agreed, setAgreed] = useState<boolean | null>(null);
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name || agreed === null) {
      alert("Please enter your name and select an attendance option.");
      return;
    }

    const res = await execute({
      fullname: name,
      remarks: agreed,
    });

    if (res) {
      router.push("/RSVP/thankyou");
    } else {
      console.error("Submission failed.");
    }
  };

  return (
    <div>
      <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
        <div className="space-y-9">
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            className="w-full rounded-lg px-5 py-3 text-gray-900 placeholder-gray-400 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                checked={agreed === true}
                onChange={() => setAgreed(true)}
                className="w-5 h-5 text-pink-500 bg-white border-2 border-pink-300 rounded-full focus:ring-pink-400"
              />
              <span className="text-sm text-gray-700">🎉 Yes! I will come.</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="attendance"
                checked={agreed === false}
                onChange={() => setAgreed(false)}
                className="w-5 h-5 text-pink-500 bg-white border-2 border-pink-300 rounded-full focus:ring-pink-400"
              />
              <span className="text-sm text-gray-700">😢 Sorry! I cannot attend.</span>
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isPending}
            className="w-full mt-10 justify-center inline-flex items-center gap-3 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition-all duration-300 ease-in-out rounded-xl text-lg shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            <CheckCircle className="text-white text-xl" />
            {isPending ? "Submitting..." : "Submit Response"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Click the button above to confirm. We can't wait to see you!
        </p>
      </div>
    </div>
  );
}
