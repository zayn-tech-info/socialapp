import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

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
      set({ authUser: response.data });
      set({ user: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ authUser: null });
      set({ loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      toast.success("Logged out successfully");
      set({ authUser: null });
    } catch (error) {
      toast.error(error.response.message || "Something went wrong try again");
    }
  },
}));

export default useAuthStore;
