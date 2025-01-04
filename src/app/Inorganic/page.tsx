"use client";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 mt-12 px-5">
        <img
          src="https://dme2wmiz2suov.cloudfront.net/User(3471047)/CourseBundles(34580)/2309835-Blue_And_White_Modern_Website_Development_Services_Facebook_Post_(YouTube_Thumbnail)-5.png"
          height={500}
          width={500}
          alt="thumbnail"
          className="md:w-1/2"
        />
        <div className="text-center md:text-left mt-5 md:ml-5">
          <h1 className="font-extrabold text-xl md:text-2xl text-teal-600">
            HERO COURSE-INORGANIC CHEMISTRY
          </h1>
          <h2 className="font-semibold md:text-xl mt-5 text-red-300">
            Let&apos;s Crack the Exams Together
          </h2>
          <h3 className="font-semibold md:text-xl mt-5 text-red-200">
            Live Lectures • Live Tutorials • Competitive exam&apos;s practice{" "}
          </h3>
          <h3 className="font-semibold md:text-xl mt-5 text-red-200">
            5k+ students • Lifetime valid • Notes &amp; Material included.{" "}
          </h3>
          <div className="flex justify-center">
            <Link href="/payment">
              <button className="mt-9 text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                Buy Course for 99₹
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-left w-full px-5">
        <div className="text-red-200 px-12 font-semibold text-xl flex flex-col gap-5 text-left">
          <p>✅ Notes &amp; Material included</p>
          <p>✅ Beginner to Advance Level</p>
          <p>✅ Money back guarantee</p>
          <p>✅ Lifetime validity</p>
        </div>
      </div>
      <div className="max-w-2xl mx-5 mt-10 px-5 py-8 shadow-lg rounded-lg">
        <h2 className="text-xl md:text-3xl lg:text-3xl  font-bold font-serif text-center text-red-300 mb-6 uppercase">
          Inorganic Chemistry Index
        </h2>

        <div className="space-y-4 text-lg text-red-100">
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            1. Introduction to Inorganic Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            2. Atomic Structure and Periodicity
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            3. Chemical Bonding
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            4. Coordination Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            5. Main Group Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            6. Transition Metal Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            7. Solid State Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            8. Chemical Thermodynamics
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            9. Chemical Kinetics
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            10. Acids and Bases
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            11. Redox Reactions
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            12. Electrochemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            13. Nuclear Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            14. Analytical Techniques in Inorganic Chemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-md md:text-2xl lg:text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            15. Applications of Inorganic Chemistry
          </p>
        </div>
      </div>
      <div className="relative custom:relative mt-5 font-semibold md:fixed bottom-5 right-5 flex items-center bg-white p-4 shadow-lg rounded-full ">
        <p className="mr-2 text-teal-600">Need help? Chat with us</p>
        <span>
          <a href="https://wa.me/9825684062" target="_blank">
            <img src="./wp.webp" alt="WhatsApp" height={50} width={50} />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Page;
