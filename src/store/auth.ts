import { AuthState } from "@/types/authState";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  hydrated: false,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  setHydrated: (hydrated) => set({ hydrated }),
}));
