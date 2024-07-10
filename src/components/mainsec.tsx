"use-client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";

function mainsec() {
  const words = [
    {
      text: "Unlocking",
      className: "text-xl md:text-4xl",
    },
    {
      text: "the",
      className: "text-xl md:text-4xl",
    },
    {
      text: "Mysteries",
      className: "text-xl md:text-5xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "of",
      className: "text-xl md:text-5xl text-red-500 dark:text-red-300",
    },
    {
      text: "Molecules.",
      className: "text-xl md:text-5xl text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black/15">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="py-10 mt-10 flex flex-col z-10 align-middle justify-center items-center h-screen">
        <div className=" mt-7 sm:mt-10 md:mt-20 md:text-7xl  sm:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <span className="font-serif" style={{ color: "red" }}>Dr. </span>
          <span className="font-serif" style={{ color: "white" }}>Chemistry</span>
        </div>
        <TypewriterEffect className="mt-7" words={words} />
        <p className="mt-7 px-2 text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-justify">
          "Welcome to our comprehensive chemistry website, your gateway to
          exploring the diverse realms of this fascinating science. From the
          intricate world of organic compounds to the fundamental principles of
          physical chemistry, embark on a journey through the vast spectrum of
          chemical disciplines. Discover, learn, and delve into the wonders of
          chemistry with us."
        </p>
        
        <div className="md:flex md:gap-7 lg:flex lg:gap-10 flex flex-col gap-5 items-center sm:flex-row sm:justify-center sm:gap-5 mt-7">
          <Link href={"/Images"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-red-300 border-neutral-200 dark:border-slate-800 font-weight-2 rounded-lg"
            >
              Chemistry Gallery
            </Button>
          </Link>
          
          <Link href={"/Videos"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-red-300 border-neutral-200 dark:border-slate-800 font-weight-2 rounded-lg"
            >
              Chemistry Clips
            </Button>
          </Link></div>
        </div>
      </div>
      <div>
      </div>
    
  
    </>
  );
}

export default mainsec;
