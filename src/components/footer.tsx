import React from 'react'

function footer() {
  return (
    <footer id='footer' className='bg-black text-gray-400 py-12'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8">
        <div>
        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Explore Dr. Chemistry, our gateway to the captivating realm of chemistry. Led by Dr. Jayesh Shah, we provide engaging resources for a deeper understanding of chemical sciences. Join us on a journey through the wonders of molecules, reactions, and discoveries that shape our world.
          </p>
        </div>
        <div>
        <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
        <p>Vadodara, Gujarat</p>
          <p>Dabhoi, 391110</p>
          <p className='text-blue-400'>Email: <a href="mailto:jayeshshah083@gmail.com">jayeshshah083@gmail.com</a></p>
          <p className='text-blue-400'>Phone: <a href="tel:+919825684062">+919825684062</a></p>
        </div>
        
        </div>
        <p className="text-center text-gray-300 text-sm pt-8"> Copyrights Dr. Chemistry. All rights reserved.</p>
    </footer>
  )
}

export default footer