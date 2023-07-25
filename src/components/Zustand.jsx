import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";

const Zustand = () => {
  const [input, setInput] = useState("");

  const isLoading = usePost((state) => state.isLoading);
  const posts = usePost((state) => state.data);
  const error = usePost((state) => state.error);
  const getPosts = usePost((state) => state.getPosts);
  const createPost = usePost((state) => state.createPost);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const time = new Date().toString();
  const data = {
    id: Math.floor(Math.random() * 100 + Number(time)),
    title: input,
  };
  const handleSubmit = () => {
    createPost(data);
    setInput("");
  };

  return (
    <div className="container p-5 flex flex-col items-center">
      <h1 className="text-fuchsia-600 text-5xl font-bold ">Zustand Example</h1>
      <hr className="my-5 border-1 border-fuchsia-200" />
      <div className="flex flex-row gap-7 mt-10">
        <input
          value={input}
          className="p-3 bg-gray-100 w-[370px] rounded-md"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="p-4 bg-fuchsia-600 text-white rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="p-5 bg-gray-100 w-1/3 rounded-md mt-10">
        <p className="text-fuchsia-600 text-xl">All Posts</p>
        <hr className="my-5 border-1 border-fuchsia-200" />
        {error && <p className="text-rose-600">{error}</p>}
        {isLoading
          ? "Loading..."
          : posts.map((post) => (
              <div key={post.id} className="my-3 text-fuchsia-600">
                - {post.title}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Zustand;
