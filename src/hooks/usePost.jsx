import { create } from "zustand";

const usePost = create((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  getPosts: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/posts");
      const result = await response.json();
      set({ isLoading: false, data: result });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },

  createPost: async (data) => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id: data.id, title: data.title }),
      });
      const result = await response.json();
      set({ isLoading: false, data: [result, ...get().data] });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
}));

export default usePost;
