import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  subscribeWithSelector,
} from "zustand/middleware";

export interface User {
  userId: string;
  name: string;
  email: string;
  status: "ADM" | "CLIENTE" | "TESTE" | "BARBEIRO" | "DEV";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  hasHydrated: boolean;
  logout: () => void;
  setUser: (user: User | null) => void;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        hasHydrated: false,

        logout: () => set({ user: null, isAuthenticated: false }),
        setUser: (user) => set({ user, isAuthenticated: !!user }),
        setHasHydrated: (state) => set({ hasHydrated: state }),
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      },
    ),
  ),
);
