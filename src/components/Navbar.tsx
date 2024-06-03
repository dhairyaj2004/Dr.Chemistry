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
          "fixed flex top-10 inset-x-0 max-w-sm md:max-w-2xl mx-auto z-50 justify-center bg-black rounded-full text-lg border border-red-200",
        className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-lg">
                <HoveredLink href="/intro">Introduction</HoveredLink>
                <HoveredLink href="/Images">Fascinating Photos</HoveredLink>
                <HoveredLink href="/Videos">Engaging Videos</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Fields">
            <div className="flex flex-col space-y-4 text-lg">
              <HoveredLink href="/Organic Chemistry">
                Organic Chemistry
              </HoveredLink>
              <HoveredLink href="/Inorganic Chemistry">
                Inorganic Chemistry
              </HoveredLink>
              <HoveredLink href="/Physical Chemistry">
                Physical Chemistry
              </HoveredLink>
              <HoveredLink href="/BioChemistry">BioChemistry</HoveredLink>
            </div>
          </MenuItem>
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
