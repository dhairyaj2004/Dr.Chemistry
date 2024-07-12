"use client";
import { signOut } from "next-auth/react";
import ProtectedRoute from "../../components/ProtectedRoute";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/Login" });
  };
  const handleAdd = async () => {
    await signOut({ callbackUrl: "/threadAdd" });
  };
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const response = await fetch("/api/users/threads");
        if (!response.ok) {
          throw new Error("Failed to fetch threads");
        }
        const data = await response.json();
        setThreads(data.threads);
      } catch (error) {
        console.error("Error fetching threads:", error);
        setError("Failed to fetch threads. Please try again.");
      }
    }

    fetchThreads();
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <div className="py-14 mt-10 md:px-10 lg:px-10 px-2 flex justify-between">
          <h1 className="font-serif font-extrabold text-3xl md:text-5xl lg:text-5xl">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Logout
          </button>
        </div>
        <h2 className="md:px-10 lg:px-10 px-2 text-2xl md:text-3xl lg:text-4xl leading-5 font-bold text-red-300 ">
          Your Courses
        </h2>
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            <div className="relative mt-12 ml-10 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://dme2wmiz2suov.cloudfront.net/User(3471047)/CourseBundles(34585)/2309841-Blue_And_White_Modern_Website_Development_Services_Facebook_Post_(YouTube_Thumbnail)-6.png" // Replace with the actual path to your image
                  alt="Organic Chemistry Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Organic Chemistry
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="relative mt-12 ml-10 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://dme2wmiz2suov.cloudfront.net/User(3471047)/CourseBundles(34580)/2309835-Blue_And_White_Modern_Website_Development_Services_Facebook_Post_(YouTube_Thumbnail)-5.png" // Replace with the actual path to your image
                  alt="Organic Chemistry Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Inorganic Chemistry
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="relative mt-12 ml-10 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://i.ytimg.com/vi/A1sX5FdeIYk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBi0jv2TpJkG8F7CyKQEjizGputUg" // Replace with the actual path to your image
                  alt="Organic Chemistry Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Organic Chemistry
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 md:px-10 lg:px-10 px-2 flex justify-between">
          <h4 className="text-lg md:text-3xl leading-5 font-bold text-red-300 mt-12">
            Explore Threads
          </h4>
          <button
            onClick={handleAdd}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 ml-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Add Thread
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-2 ml-2 mr-2 gap-4">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {threads.map((thread) => (
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="my-2 ml-3 text-xl font-bold text-indigo-500 uppercase">
                    {thread.title}
                  </h3>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 hover:text-red-700 cursor-pointer my-2 ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="my-2 ml-3 text-md font-bold text-gray-500 uppercase">
                    Topic: {thread.topic}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 ml-3"
                    fill="none"
                    stroke="green"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
                    />
                  </svg>
                </div>
                <p className="mb-2 ml-3 text-gray-600">{thread.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
