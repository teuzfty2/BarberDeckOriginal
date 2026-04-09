"use client";

// Lib
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

// Store
import { useUIStore } from "../../../store/ui";

// Data
import {
  navItemsBarbeiro,
  navItemsCliente,
  navItemsAdmin,
} from "../data/navItems";

// Icone
import { LogOut, Menu, X } from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isSidebarOpen, toggleSidebar, isMobileMenuOpen, setMobileMenuOpen } =
    useUIStore();

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
    }
  };

  const checkIsActive = (itemPath: string) => {
    return location.pathname === itemPath;
  };

  const renderNavSection = (title: string, items: any[]) => (
    <div className="px-2 py-2 border-b border-white/5 last:border-0">
      {isSidebarOpen && (
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-4 py-2 block">
          {title}
        </span>
      )}

      <div className="space-y-1">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = checkIsActive(item.path);

          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className={`flex w-full items-center h-11 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-[#c98805]/10 text-[#f0c060] font-semibold"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              } ${isSidebarOpen ? "px-4 justify-start" : "justify-center"}`}
              title={!isSidebarOpen ? item.label : undefined}
            >
              <Icon size={18} className="shrink-0" />
              {isSidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-3 text-sm whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 w-1 h-5 bg-[#f0c060] rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          width: isSidebarOpen ? 260 : 70,
          x: typeof window !== 'undefined' && window.innerWidth < 768 ? (isMobileMenuOpen ? 0 : -280) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed md:relative top-0 left-0 h-screen bg-[#111] border-r border-white/5 z-[70] flex flex-col overflow-hidden shadow-2xl md:shadow-none`}
      >
        {/* Header do Sidebar */}
        <div className="flex items-center h-[70px] px-4 justify-between border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 bg-[#c98805] rounded-lg flex items-center justify-center shrink-0">
               <span className="text-black font-black text-lg">B</span>
            </div>
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold tracking-tight text-white whitespace-nowrap"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Barber<span className="text-[#f0c060]">Deck</span>
              </motion.span>
            )}
          </div>
          
          <button
            onClick={toggleSidebar}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition text-zinc-400"
          >
            <Menu size={20} />
          </button>

          {/* Botão fechar mobile */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition text-zinc-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items - Todas as seções restauradas */}
        <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
          {renderNavSection("Sidebar Barbeiro", navItemsBarbeiro)}
          {renderNavSection("Sidebar Cliente", navItemsCliente)}
          {renderNavSection("Sidebar Admin", navItemsAdmin)}
        </div>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-white/5 shrink-0">
          <button
            onClick={() => navigate("/", { replace: true })}
            className={`flex items-center h-12 gap-3 w-full rounded-xl transition-all border border-red-500/20 text-red-400 hover:bg-red-500/10 ${
              isSidebarOpen ? "px-4 justify-start" : "justify-center"
            }`}
          >
            <LogOut size={20} className="shrink-0" />
            {isSidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Sair da Conta</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}