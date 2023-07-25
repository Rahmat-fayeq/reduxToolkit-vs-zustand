import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsAsync, getPostsAsync } from "../features/slices/postSlice";

const ReduxToolkit = () => {
  const [input, setInput] = useState("");

  const { posts, isLoading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const time = new Date().toString();
  const data = {
    id: Math.floor(Math.random() * 100 + Number(time)),
    title: input,
  };
  const handleSubmit = () => {
    dispatch(addPostsAsync(data));
    setInput("");
  };

  return (
    <div className="container p-5 flex flex-col items-center">
      <h1 className="text-fuchsia-600 text-5xl font-bold ">
        Redux Toolkit Example
      </h1>
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

export default ReduxToolkit;
