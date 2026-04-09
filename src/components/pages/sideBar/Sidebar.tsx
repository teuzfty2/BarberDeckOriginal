// Lib
import { motion } from "framer-motion";
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
import { LogOut, Menu } from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isSidebarOpen, toggleSidebar, isMobileMenuOpen, setMobileMenuOpen } =
    useUIStore();

  const handleNavigation = (path: string) => {
    navigate(path);

    // Fecha menu no mobile ao navegar
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
    }
  };

  const checkIsActive = (itemPath: string) => {
    const currentPath = location.pathname;

    if (currentPath === itemPath) return true;

    if (
      itemPath === "/explorarlojas" &&
      currentPath.startsWith("/explorarlojas")
    ) {
      return true;
    }

    return false;
  };

  const renderNavSection = (title: string, items: any[]) => (
    <div className="border-b border-[#2a2a2a] px-2 py-2">
      {isSidebarOpen && (
        <span className="text-[10px] text-zinc-500 flex px-3 py-1">
          {title}
        </span>
      )}

      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive = checkIsActive(item.path);

        return (
          <button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`flex w-full items-center h-11 rounded-xl transition-all group ${
              isActive
                ? "bg-[#1c1c1c] text-[#f0c060] font-medium border border-[#333]"
                : "text-[#888] hover:bg-[#161616] hover:text-[#f0f0f0] border border-transparent"
            } ${isSidebarOpen ? "px-3 justify-start" : "justify-center"}`}
            title={!isSidebarOpen ? item.label : undefined}
          >
            <Icon size={20} className="shrink-0 group-hover:text-[#f0c060]" />

            {isSidebarOpen && (
              <span className="ml-3 text-sm">{item.label}</span>
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Overlay mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <motion.aside
        initial={false}
        animate={{
          x: window.innerWidth < 768 ? (isMobileMenuOpen ? 0 : -260) : 0,
          width:
            window.innerWidth < 768
              ? 260
              : isSidebarOpen
              ? 260
              : 60,
        }}
        transition={{ duration: 0.25 }}
        className="fixed md:sticky top-0 left-0 h-screen bg-[#111] border-r border-[#2a2a2a] z-50 flex flex-col overflow-hidden whitespace-nowrap"
      >
        {/* Header */}
        <div className="flex items-center h-[60px] px-3 gap-2 border-b border-[#2a2a2a]">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#1c1c1c] transition"
          >
            <Menu />
          </button>

          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold tracking-tight text-[#f0c060]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Barber<span className="text-[#f0f0f0]">Deck</span>
            </motion.span>
          )}
        </div>

        {/* Sections */}
        {renderNavSection("Sidebar Barbeiro", navItemsBarbeiro)}
        {renderNavSection("Sidebar Cliente", navItemsCliente)}
        {renderNavSection("Sidebar Admin", navItemsAdmin)}

        {/* Logout */}
        <div className="mt-auto p-3 border-t border-[#2a2a2a]">
          <button
            onClick={() => navigate("/", { replace: true })}
            className="flex items-center p-2 gap-3 w-full rounded-xl transition-all border border-[#e57373]/20 text-[#e57373] hover:bg-[#e57373]/10"
          >
            <LogOut size={20} className="shrink-0" />
            {isSidebarOpen && <span className="text-sm font-medium">Sair</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}