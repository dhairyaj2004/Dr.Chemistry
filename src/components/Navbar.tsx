"use-client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <div
      className={cn(
        "fixed w-full top-0 left-0 bg-gradient-to-r from-transparent to-gray-900 text-xl shadow-2xl z-50 font-serif font-semibold",
        className
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        
      
      <div className="flex items-center">
  <Link href="/">
    <div className="flex items-center space-x-2">
     
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <circle cx="25" cy="25" r="5" fill="blue" />
  <circle cx="25" cy="25" r="15" fill="none" stroke="gray" stroke-width="1" />
  <circle cx="25" cy="25" r="24" fill="none" stroke="gray" stroke-width="1" />
  
  <circle cx="40" cy="25" r="3" fill="red" />
  <circle cx="10" cy="25" r="3" fill="red" />
  <circle cx="25" cy="10" r="3" fill="red" />
  <circle cx="25" cy="40" r="3" fill="red" />
</svg>



      
      <h1 className="text-2xl">
        <span className="text-red-500">Dr.</span>Chemistry
      </h1>
    </div>
  </Link>
</div>


       
        <div className="md:hidden ml-auto p-4 mt-2">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

       
        <div className="hidden md:flex space-x-8 ml-auto">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="hidden md:flex flex-col space-y-4 text-sm md:text-lg lg:text-lg">
                <HoveredLink href="/Images">Fascinating Photos</HoveredLink>
                <HoveredLink href="/Videos">Engaging Videos</HoveredLink>
              </div>
              <div className="flex flex-col space-y-4 text-sm md:hidden ml-5">
                <HoveredLink href="/Images">Insightful</HoveredLink>
                <HoveredLink href="/Videos">Engaging</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Fields">
            <div className="flex flex-col space-y-4 text-sm md:text-lg lg:text-lg">
              <HoveredLink href="/Organic">Organic Chemistry</HoveredLink>
              <HoveredLink href="/Inorganic">Inorganic Chemistry</HoveredLink>
              <HoveredLink href="/Bio">BioChemistry</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <Menu setActive={setActive}>
          <Link href={"#footer"}>
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>
        <Menu setActive={setActive}>
          <Link href={"/Login"}>
            <MenuItem setActive={setActive} active={active} item="Login" />
          </Link>
        </Menu>

        </div>
      </div>

      {/* Mobile menu (hamburger dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 flex flex-col space-y-4 p-4">
          <Link href="/">
            <HoveredLink onClick={toggleMenu} href="/Images">Fascinating Photos</HoveredLink>
          </Link>
          <Link href="/Videos">
            <HoveredLink onClick={toggleMenu} href="/Videos">Engaging Videos</HoveredLink>
          </Link>
          <Link href="/Organic">
            <HoveredLink onClick={toggleMenu} href="/Organic">Organic Chemistry</HoveredLink>
          </Link>
          <Link href="/Inorganic">
            <HoveredLink onClick={toggleMenu} href="/Inorganic">Inorganic Chemistry</HoveredLink>
          </Link>
          <Link href="/Bio">
            <HoveredLink onClick={toggleMenu} href="/Bio">BioChemistry</HoveredLink>
          </Link>
          <Link href="#footer">
            <HoveredLink onClick={toggleMenu} href="#footer">Contact</HoveredLink>
          </Link>
          <Link href="/Login">
            <HoveredLink onClick={toggleMenu} href="/Login">Login</HoveredLink>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
