"use client";
import { useSession, signOut } from "next-auth/react";
import ProtectedRoute from "@/components/protectedRoute.js";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [threads, setThreads] = useState([]); // Moved useState hooks to the top
  const [error, setError] = useState(null); // Moved useState hooks to the top

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/Login";
    }
  }, [status]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/Login" });
  };

  const handleAdd = () => {
    window.location.href = "/threadAdd";
  };

  const handleUpdate = (id) => {
    console.log(id);
    window.location.href = `threadUpdate/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      let descision = confirm(
        "Sure? After deleting thread will no longer accessible to anyone."
      );
      if (descision) {
        const response = await fetch(`/api/users/threads/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete thread");
        }
        window.location.reload();
        const data = await response.json();
        console.log(data.message); // Log success message
      } else {
        alert("Thread is not deleted");
      }
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  };

  useEffect(() => {
    async function fetchThreads() {
      try {
        const response = await fetch("/api/users/threads/[id]");
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
  }, []); // Ensure useEffect dependencies are correct

  if (status === "loading") {
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900">
      <div className="bg-black p-8 rounded-md shadow-md flex">
        <p className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-100"></p>{" "}
        <div className="mt-3 ml-3">Wait for a While</div>
      </div>
    </div>;
  }

  if (!session) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900">
        <div className="bg-black p-8 rounded-md shadow-md flex">
          <p className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-100"></p>{" "}
          <div className="mt-3 ml-3">
            Wait for a While, Otherwise Login again
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="py-12 md:px-10 lg:px-10 px-2 flex justify-between">
          <h1 className="mt-12 font-serif font-extrabold text-3xl md:text-5xl lg:text-5xl">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-12 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Logout
          </button>
        </div>
        <h2 className="md:px-10 lg:px-10 px-2 text-2xl md:text-3xl lg:text-4xl leading-5 font-bold text-red-300">
          Your Courses
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {/* Sample course cards */}
            <div className="relative mt-12 ml-10 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://dme2wmiz2suov.cloudfront.net/User(3471047)/CourseBundles(34585)/2309841-Blue_And_White_Modern_Website_Development_Services_Facebook_Post_(YouTube_Thumbnail)-6.png"
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
                  src="https://dme2wmiz2suov.cloudfront.net/User(3471047)/CourseBundles(34580)/2309835-Blue_And_White_Modern_Website_Development_Services_Facebook_Post_(YouTube_Thumbnail)-5.png"
                  alt="Inorganic Chemistry Image"
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
                  src="https://i.ytimg.com/vi/A1sX5FdeIYk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBi0jv2TpJkG8F7CyKQEjizGputUg"
                  alt="General Chemistry Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  BioChemistry
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-2 px-8  gap-4 ">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {threads.map((thread) => (
            <div
              className="relative h-full ml-0 mr-0 sm:mr-10"
              key={thread._id}
            >
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="my-2  text-xl font-bold text-indigo-500 uppercase">
                    {thread.title}
                  </h3>
                  <div>
                    <button onClick={() => handleDelete(thread._id)}>
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
                    </button>
                    <svg
                      onClick={() => handleUpdate(thread._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 ml-3 cursor-pointer"
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
                </div>
                <div className="flex justify-between">
                  <p className="mb-2 -mt-6 text-sm font-bold text-gray-500 uppercase">
                    {thread.topic}
                  </p>
                </div>
                <p className="mb-2  text-gray-600">{thread.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-12 md:px-10 lg:px-10 px-2 text-2xl md:text-3xl lg:text-4xl leading-5 font-bold text-red-300">
          Demo Lectures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="max-w-lg p-4 mx-auto md:mx-4 lg:mx-4 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cE1lrOSyKqc?si=q6R13JAs0sh0z4x9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="p-2 text-base md:text-xl text-neutral-300 max-w-lg mx-auto text-justify">
              Welcome to the{" "}
              <span className="text-red-500">
                Alcohols, Phenols, and Ethers
              </span>{" "}
              chapter for Class 12. In this video, we'll explore their
              structures, properties, preparation methods, and reactions. Learn
              the importance of these compounds in chemistry and everyday life,
              as they play a vital role in industrial and biological processes.
            </p>
          </div>
          <div className="max-w-lg p-4 mx-auto md:mx-4 lg:mx-4 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                width="560"
                height="315"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KRgkzx2F4Hw?si=jZt9uOQlOy80MHzX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="p-2 text-base md:text-xl text-neutral-300 max-w-lg mx-auto text-justify">
              In a ,
              <span className="text-red-500">C—O bond-breaking reaction</span>{" "}
              the bond between carbon and oxygen atoms in a molecule is cleaved,
              resulting in the formation of new products. This reaction
              typically involves breaking a covalent bond, which requires energy
              input. Such reactions are fundamental in organic chemistry,
              influencing reaction mechanisms and product formation.
            </p>
          </div>
          <div className="max-w-lg p-4 mx-auto md:mx-4 lg:mx-4 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                width="560"
                height="315"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/EcLhupwS1ao?si=duWzelT00zTanVHY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="p-2 text-base md:text-xl text-neutral-300 max-w-lg mx-auto text-justify">
              <span className="text-red-500">Esterification</span> is a chemical
              reaction between a carboxylic acid and an alcohol, producing an
              ester and water. This process, typically catalyzed by an acid,
              involves the condensation of the acid and alcohol molecules. It's
              widely used in making fragrances, flavors, and pharmaceuticals due
              to its ability to produce aromatic esters.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;