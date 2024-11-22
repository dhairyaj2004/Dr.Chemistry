"use client";
export default function PaymentSuccess({ searchParams: { amount } }) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto p-10 text-center rounded-md bg-gradient-to-tr from-gray-900 to-black shadow-xl border border-purple-700">
        <div className="mb-10">
          <h1 className="text-4xl md:text-4xl lg:text-4xl text-green-400 font-extrabold mb-2">
            Congratulations!
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-2xl text-gray-300">
            You've successfully bought the course for just
          </h2>

          <div className="p-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-5 text-4xl font-bold shadow-lg transform transition duration-500 hover:scale-105">
            ₹{amount}
          </div>
          <div></div>
        </div>
        <button
          className="p-2 rounded-md bg-blue-700 text-white mt-5 text-xl font-semibold shadow-lg"
          onClick={() => window.location.replace("/")}
        >
          Back to Home Page
        </button>
      </div>
    </main>
  );
}
