"use client";

import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 mt-12 px-5">
        <img
          src="https://i.ytimg.com/vi/A1sX5FdeIYk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBi0jv2TpJkG8F7CyKQEjizGputUg"
          height={500}
          width={500}
          alt="thumbnail"
          className="md:w-1/2"
        />
        <div className="text-center md:text-left mt-5 md:ml-5">
          <h1 className="font-extrabold text-xl md:text-2xl text-teal-600">
            HERO COURSE-BIOCHEMISTRY
          </h1>
          <h2 className="font-semibold md:text-xl mt-5 text-red-300">
            Let&#39;s Crack the Exams Together
          </h2>
          <h3 className="font-semibold md:text-xl mt-5 text-red-200">
            Live Lectures • Live Tutorials • Competitive exam&#39;s practice
          </h3>
          <h3 className="font-semibold md:text-xl mt-5 text-red-200">
            5k+ students • Lifetime valid • Notes &amp; Material included.
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
        <h2 className="text-3xl font-bold font-serif text-center text-red-300 mb-6 uppercase">
          Biochemistry Index
        </h2>
        <div className="space-y-4 text-lg text-red-100">
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            1. Introduction to Biochemistry
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            2. Biomolecules: Carbohydrates
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            3. Biomolecules: Lipids
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            4. Biomolecules: Proteins
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            5. Biomolecules: Nucleic Acids
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            6. Enzymes and Enzyme Kinetics
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            7. Metabolism: Overview
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            8. Glycolysis and Gluconeogenesis
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            9. Citric Acid Cycle (Krebs Cycle)
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            10. Oxidative Phosphorylation and Electron Transport Chain
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            11. Pentose Phosphate Pathway
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            12. Lipid Metabolism
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            13. Protein Metabolism
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            14. Nucleotide Metabolism
          </p>
          <p className="min-w-screen bg-teal-800 shadow-lg rounded-lg text-left text-2xl px-6 py-4 transition-transform duration-300 hover:scale-105 hover:bg-teal-700 cursor-pointer">
            15. Regulation of Metabolism
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
