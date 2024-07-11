"use client";
import { signOut } from "next-auth/react";
import ProtectedRoute from "../../components/ProtectedRoute";

const Dashboard = () => {

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/Login" });
  };
  
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
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-5 px-10 flex justify-between">
        <h4 className="px-10 text-2xl md:text-3xl leading-5 font-bold text-red-300 mt-12">Join Batch</h4>
        <button
            onClick={handleEnroll}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-10 ml-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            ENROLL NOW
          </button> */}
      {/* </div> */}
      {/* <div className="grid grid-cols-1 gap-3 justify-between">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Student Name</th>
        <th className="py-3 px-6 text-left">Student Subject Group</th>
      </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">John Doe</td>
        <td className="py-3 px-6 text-left">PCM</td>
      </tr>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">Jane Smith</td>
        <td className="py-3 px-6 text-left">PCB</td>
      </tr>
    </tbody>
  </table>
</div> */}

      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
