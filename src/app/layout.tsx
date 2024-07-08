"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      <div className=" relative w-full flex items-center justify-center"><Navbar/></div></body>
    </html>
  );
}
