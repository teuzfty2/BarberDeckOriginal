import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;

  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;

  activeView: string;
  setActiveView: (view: string) => void;

  isScheduleSectionOpen: boolean;
  toggleScheduleSection: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Sidebar
      isSidebarOpen: true,
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      // Mobile Menu
      isMobileMenuOpen: false,
      setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),

      // View ativa
      activeView: "menu",
      setActiveView: (view) => set({ activeView: view }),

      // Seção de agenda
      isScheduleSectionOpen: false,
      toggleScheduleSection: () =>
        set((state) => ({
          isScheduleSectionOpen: !state.isScheduleSectionOpen,
        })),
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({
        isSidebarOpen: state.isSidebarOpen,
        activeView: state.activeView,
        isScheduleSectionOpen: state.isScheduleSectionOpen,
      }),
    }
  )
);