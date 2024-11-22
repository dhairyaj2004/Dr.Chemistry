"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

function EndSec() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10  text-3xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Meet our Instructor...
        </h1>
        <div className="py-10 relative z-10 text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold flex flex-col items-center justify-center space-y-4">
        <img
            src="/pappa.jpg"
            alt="Instructor Image"
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h1>Dr. Jayesh Shah</h1>
            <p className="text-xl md:text-4xl">(B.Sc., B.Ed., M.Sc., M.Ed., Ph.D.)</p>
          </div>  
        </div>
      </div>
      <h2 className="uppercase font-serif font-extrabold text-center">
    <span className="text-red-500">
      Login
    </span> For Demo Lectures.
  </h2>
      <BackgroundBeams />
    </div>
  );
}

export default EndSec;
