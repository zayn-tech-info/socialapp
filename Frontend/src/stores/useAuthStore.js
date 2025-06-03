import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useAuthStore = create((set) => ({
  authUser: null,
  user: null,
  loading: false,
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      set({ user: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
}));

export default useAuthStore;
