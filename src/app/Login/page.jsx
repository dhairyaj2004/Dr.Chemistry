"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitClick = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages
    if (email === "" || password === "") {
      setError("Please fill all the fields");
      return;
    }
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log('signIn response:', res); // Log the response

      if (res.error) {
        setError("Invalid Credentials");
      } else {
        router.replace("/"); // Redirect to home on successful login
      }
    } catch (error) {
      console.log(error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg shadow-lg p-5 bg-zinc-900 text-white border border-purple-400">
        <h2 className="text-2xl font-bold pb-5">Sign In</h2>
        <form onSubmit={submitClick}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="dhairya123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <div className="flex items-center justify-center text-sm mt-5">
            <p>New here?</p>
            <Link href="/Sign-Up">
              <p className="underline cursor-pointer ml-1">Register</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
