"use-client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    
      <div
        className={cn(
          "fixed flex font-semibold font-serif -top-0.5 inset-x-0 max-w-full md:max-w-full mx-auto z-50 justify-center md:justify-end  bg-gradient-to-r from-blue-300 to-slate-900  text-xl rounded-lg shadow-xl ",
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-lg">
                
                <HoveredLink href="/Images">Fascinating Photos</HoveredLink>
                <HoveredLink href="/Videos">Engaging Videos</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Fields">
            <div className="flex flex-col space-y-4 text-lg">
              <HoveredLink href="/Organic">
                Organic Chemistry
              </HoveredLink>
              <HoveredLink href="/Inorganic">
                Inorganic Chemistry
              </HoveredLink>
              <HoveredLink href="/Bio">BioChemistry</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <Menu setActive={setActive}>
          <Link href={"/Login"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Login"
            ></MenuItem>
          </Link>
        </Menu>
        <Menu setActive={setActive}>
          <Link href={"#footer"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
  
  );
}

export default Navbar;
