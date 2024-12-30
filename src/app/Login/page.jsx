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
      setTimeout(() => {
        setError("Please fill all the fields");
      }, 3000);

      return;
    }
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log("signIn response:", res); // Log the response

      if (res.error) {
        setError("Invalid Credentials");
      } else {
        router.replace("/dashboard"); // Redirect to dashboard on successful login
      }
    } catch (error) {
      console.log(error);
      setError("An unexpected error occurred");
    }
  };

  async function signInWithGoogle() {
    try {
      // console.log("Hello")
      const res = await signIn("google", {
        redirect: false,
        callbackUrl: "/dashboard",
      });
      console.log("Google sign-in response:", res.error);
      if (res.error) {
        setError("Failed to sign in with Google");
      } else {
        console.log(res)
        localStorage.setItem("Credential",JSON.stringify(res))
        console.log("***") // Redirect to home after successful Google sign-in
      }
    } catch (error) {
      setTimeout(() => {
        console.log("Google sign-in error:", error);
        setError("Failed to sign in");
      }, 2000);
    }
  }

  return (
    <div className="flex min-h-screen md:mt-10 items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="w-72 md:w-96 lg:w-p6 rounded-lg shadow-lg p-5 bg-gradient-to-b from-gray-950 to-gray-900 text-white border border-purple-400">
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
            <label className="block mb-2 text-sm font-medium">
              Your password
            </label>
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
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
            or sign in with
          </p>

          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>

            <span className="md:mx-12">Sign in with Google</span>
          </button>

          <div className="flex items-center justify-center text-sm mt-5">
            <p>New here?</p>
            <Link href="/Sign-Up">
              <p className="text-purple-500 underline cursor-pointer ml-1">
                Register
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
