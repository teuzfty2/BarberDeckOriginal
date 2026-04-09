// Store
import { useAuthStore } from "../../../store/auth";
import { useUIStore } from "../../../store/ui";

// Icone
import { Menu } from "lucide-react";


export function Navbar() {
  const user = useAuthStore();
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 h-[60px] bg-[#111] border-b border-[#444] shrink-0">

      {/* Botão menu (mobile) */}
      <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white">
        <Menu size={22} />
      </button>

      {/* User */}
      <div className="text-right flex flex-col justify-center">
        <p className="text-xs md:text-sm font-bold text-[#f0f0f0] leading-none">
          {user.user?.name || "Matheus"}
        </p>

        <p className="text-[10px] md:text-xs text-[#f0c060] font-medium mt-1 uppercase tracking-wider leading-none">
          {user.user?.status || "Dev"}
        </p>
      </div>

    </nav>
  );
}