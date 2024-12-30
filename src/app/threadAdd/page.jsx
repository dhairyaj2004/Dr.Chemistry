"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!title || !desc || !topic) {
      setError("Please fill all the fields");
      return;
    }

    // Ensure user is authenticated
    if (status !== "authenticated") {
      setError("You must be logged in to create a thread.");
      return;
    }

    try {
      // Retrieve the logged-in user's email
      const ownerEmail = session?.user?.email;

      // Make POST request to the API
      const res = await fetch("/api/users/threads/1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, desc, topic, ownerEmail }),
      });

      if (res.ok) {
        // Reset form fields and navigate to dashboard upon success
        setTitle("");
        setDesc("");
        setTopic("");
        setError(""); // Clear any previous errors
        const dt=await res.json();
        console.log(dt)
        // router.push("/dashboard");
      } else {
        // Handle errors from the API
        const errorData = await res.json();
        setError(errorData.error || "Creation failed");
      }
    } catch (error) {
      console.error("Error creating thread:", error);
      setError("Failed to create thread. Please try again.");
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-transparent to-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-gradient-to-r from-transparent to-gray-900 rounded-md shadow-md border border-purple-500">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Create Thread</h2>
        <form onSubmit={handleCreate}>
          {/* Thread Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-100"
            >
              Thread Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter thread title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-100"
            >
              Description 
            </label>
            <textarea
              id="description"
              name="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
              className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter thread description"
              required
            />
          </div>

          {/* Radio Buttons for Topics */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2">
              Select Topic
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  id="topic-organic"
                  name="topic"
                  value="Organic Chemistry"
                  checked={topic === "Organic Chemistry"}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  required
                />
                <label
                  htmlFor="topic-organic"
                  className="ml-2 block text-sm text-gray-100"
                >
                  Organic Chemistry
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="topic-inorganic"
                  name="topic"
                  value="Inorganic Chemistry"
                  checked={topic === "Inorganic Chemistry"}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="topic-inorganic"
                  className="ml-2 block text-sm text-gray-100"
                >
                  Inorganic Chemistry
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="topic-biochemistry"
                  name="topic"
                  value="Biochemistry"
                  checked={topic === "Biochemistry"}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="topic-biochemistry"
                  className="ml-2 block text-sm text-gray-100"
                >
                  Biochemistry
                </label>
              </div>
            </div>
          </div>
          {error && <p className="text-center text-red-500 mb-2">{error}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Thread
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
