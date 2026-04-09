import { create } from 'zustand';
import { persist, createJSONStorage, subscribeWithSelector } from 'zustand/middleware';
import { CreateIndexedDBStorage } from '../../lib/indexedDBStorage';

export interface User {
  userId: string;
  name: string;
  email: string;
  statusAdm: 'ADM' | 'CLIENTE' | 'TESTE' | 'BARBEIRO';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  _hasHydrated: boolean;
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
        _hasHydrated: false,
        
        logout: () => {
            set({ user: null, isAuthenticated: false });
        },
        
        setUser: (user) => set({ 
          user: user, 
          isAuthenticated: !!user 
        }),
        
        setHasHydrated: (state) => set({ _hasHydrated: state }),
      }),
      {
        name: 'auth-storage-v2',
        // Desativando criptografia temporariamente para depuração e estabilidade no preview
        storage: createJSONStorage(() => CreateIndexedDBStorage("authDB", "authStore", false)),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        }
      }
    )
  )
);