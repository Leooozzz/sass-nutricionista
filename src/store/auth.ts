import { AuthState } from "@/types/authState";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      hydrated: false,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "auth-storage", 
      
    }
  )
);
