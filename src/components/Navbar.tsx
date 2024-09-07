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
        "fixed flex font-semibold font-serif -top-0.5 inset-x-0 max-w-full md:max-w-full mx-auto z-50 justify-between md:justify-end bg-gradient-to-r from-transparent to-gray-900 text-xl shadow-2xl",
        className
      )}
    >
    <div className="p-4">
    <Link href="/">
      <img src="/Logo.png" alt="Logo" className="h-8" /> {/* Adjust size as needed */}
    </Link>
  </div>
      <div className="md:hidden ml-auto p-4">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

    
      <div className="hidden md:flex">
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
