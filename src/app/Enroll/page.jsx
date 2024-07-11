


function page() {
  return (
    <div className="bg-black-100 flex justify-center items-center min-h-screen py-10 mt-10">
        <div className="w-full max-w-md bg-zinc-900 p-8 rounded-lg shadow-lg border border-purple-400">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter your details</h2>

        <form action="/data" method="POST">
            <div className="mb-4">
                <label for="fname" className="block text-gray-100 font-bold mb-2">First Name:</label>
                <input type="text" id="fname" name="fname" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label for="lname" className="block text-gray-100 font-bold mb-2">Last Name:</label>
                <input type="text" id="lname" name="lname" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-100 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label for="cc" className="block text-gray-100 font-bold mb-2">Country Code:</label>
                <input type="tel" id="cc" name="cc" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label for="phone" className="block text-gray-100 font-bold mb-2">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label for="address" className="block text-gray-100 font-bold mb-2">Address:</label>
                <textarea id="address" name="address" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="mb-4">
            <label for="grp" className="block text-gray-100 font-bold mb-2">Select Subject Group:</label>
  <div className="flex items-center mb-2">
    <input type="radio" id="grp1" name="grp" required className="mr-2"/>
    <label for="grp1" className="text-sm text-gray-100">PCM</label>
  </div>
  <div className="flex items-center mb-2">
    <input type="radio" id="grp2" name="grp" required className="mr-2"/>
    <label for="grp2" className="text-sm text-gray-100">PCB</label>
  </div>
  <div className="flex items-center mb-2">
    <input type="radio" id="grp3" name="grp" required className="mr-2"/>
    <label for="grp3" className="text-sm text-gray-100">PCMB</label>
  </div>
            </div>
            <div>
                <button type="submit" id="submit" className="w-full bg-purpl1-500 text-white font-bold py-2 px-4 rounded-lg bg-purple-700 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Upload Details</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default page