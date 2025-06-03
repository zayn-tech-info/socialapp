import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  signup: async (email, password, username) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.post("/auth/signup", {
        email,
        password,
        username
      });
      set({ user: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await axiosInstance.post("/auth/login", {
        email,
        password
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