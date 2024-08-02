export default function PaymentSuccess({
    searchParams: { amount },
  }) {
    return (
        <main className="max-w-8xl mx-auto p-10 text-center m-10 rounded-md bg-gradient-to-tr from-gray-900 to-black mt-16 shadow-xl border border-gray-800">
        <div className="mb-10">
          <h1 className="text-4xl text-green-400 font-extrabold mb-2">Congratulations!</h1>
          <h2 className="text-2xl text-gray-300">You've successfully bought the course for just</h2>
      
          <div className="p-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white mt-5 text-4xl font-bold shadow-lg transform transition duration-500 hover:scale-105">
            ₹{amount}
          </div>
        </div>
      </main>
      
    );
  }