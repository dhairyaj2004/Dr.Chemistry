"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCreate = async (e) => {
    e.preventDefault();
    window.location.href='/dashboard'
    // Check if any required field is empty
    if (!title || !desc) {
      setError("Please fill all the fields");
      return;
    } 

    try {
        const res = await fetch("/api/users/threads/[id]", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, desc, topic }),
          });
    
          if (res.ok) {
            setTitle("");
            setDesc("");
            setTopic("");
            router.push("/threadAdd") 
          } else {
            const errorData = await res.json();
            setError(errorData.error || "Creation failed");
          }
    } catch (error) {
      console.error('Error creating thread:', error);
      setError("Failed to create thread. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-black rounded-md shadow-md border border-purple-500">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Create Thread</h2>
        <form onSubmit={handleCreate}>
          {/* Thread Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-100">Thread Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter thread title"
              
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-100">Description</label>
            <textarea
              id="description"
              name="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={3}
              className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter thread description"
              
            />
          </div>

          {/* Radio Buttons for Topics */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-100 mb-2">Select Topic</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  id="topic-organic"
                  name="topic"
                  value="Organic Chemistry"
                  checked={topic === 'Organic Chemistry'}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="topic-organic" className="ml-2 block text-sm text-gray-100">Organic Chemistry</label>
              </div>
              <div className="flex items-center">
                <input
                  id="topic-inorganic"
                  name="topic"
                  value="Inorganic Chemistry"
                  checked={topic === 'Inorganic Chemistry'}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="topic-inorganic" className="ml-2 block text-sm text-gray-100">Inorganic Chemistry</label>
              </div>
              <div className="flex items-center">
                <input
                  id="topic-biochemistry"
                  name="topic"
                  value="Biochemistry"
                  checked={topic === 'Biochemistry'}
                  onChange={(e) => setTopic(e.target.value)}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="topic-biochemistry" className="ml-2 block text-sm text-gray-100">Biochemistry</label>
              </div>
            </div>
          </div>
          {error && <p className='text-center text-red-500 mb-2'>{error}</p>}
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
