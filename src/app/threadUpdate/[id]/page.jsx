"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const ThreadUpdate = () => {
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [topic, setTopic] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchThread() {
      try {
        const id = params.id;
        if (!id) {
          throw new Error("No ID in router query for update");
        }

        const response = await fetch(`/api/users/threads/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch thread details");
        }

        const data = await response.json();
        setTitle(data.threads.title || "");
        setDesc(data.threads.description || "");
        setTopic(data.threads.topic || "");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching thread:", error);
        setError("Failed to fetch thread details. Please try again.");
        setLoading(false);
      }
    }

    if (params.id) {
      fetchThread();
    }
  }, [params.id]);
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const id = params.id;
      const res = await fetch(`/api/users/threads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, desc, topic }),
      });

      if (res.ok) {
        setTitle("");
        setDesc("");
        setTopic("");
        setError("");
        router.push("/dashboard"); // or wherever you want to redirect after update
      } else {
        throw new Error("Failed to update thread");
      }
    } catch (error) {
      console.error("Error updating thread:", error);
      setError("Failed to update thread. Please try again.");
    }
  };
  if (loading) {
    return (
      <div>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900">
          <div className="bg-black p-8 rounded-md shadow-md flex">
            <p className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-100"></p>{" "}
            <div className="mt-3 ml-3">Wait for a While</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mt-10 py-8 justify-center items-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="bg-gradient-to-r from-transparent to-gray-900 shadow-md rounded-lg p-6 md:p-10 max-w-xl w-full border border-purple-500">
        <h1 className="text-3xl font-bold mb-5 text-center">Update Thread</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-100"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-100"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
              required
            />
          </div>
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
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 w-full"
          >
            Update Thread
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThreadUpdate;
