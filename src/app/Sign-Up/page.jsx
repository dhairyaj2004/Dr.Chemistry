"use client"
import {useState} from 'react'
import {useRouter} from 'next/navigation'
function page() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const router=useRouter();
  const submitClick = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages


    if (!username || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const resUserExist = await fetch("/api/users/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExist.json();
      if (user) {
        setError("User already exists");
        return; // Exit the function if user exists
      }

      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      if (res.ok) {
        setEmail("");
        setUsername("");
        setPassword("");
        router.push("/Login") 
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Signup failed");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setError("An unexpected error occurred");
    }
  };
  
  return (
    <div className='flex min-h-screen items-center justify-center md:mt-10 bg-gradient-to-b from-gray-950 to-gray-900'>
        <section className="flex flex-col items-center pt-6">
  <div
    className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gradient-to-b from-gray-950 to-gray-900 dark:border-purple-400">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
        account
      </h1>
      <form className="space-y-4 md:space-y-6" method="POST" id='signupForm'>
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input 
          onChange={(e)=>setEmail(e.target.value)}
          type="email" name="name" id="name" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dhairya123@gmail.com" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input
          onChange={(e)=>setUsername(e.target.value)}
          type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dhairya_20" required/>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input 
          onChange={(e)=>setPassword(e.target.value)}
          type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <button 
        onClick={submitClick}
        type="submit" className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 dark:focus:ring-purple-800">Create an account</button>
        { error &&
         <div className='text-red-600 text-center'>
          {error}
         
        </div>
      }
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
            className="font-medium text-purple-600 hover:underline dark:text-purple-500" href="/Login">Sign in here</a>
        </p>
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default page