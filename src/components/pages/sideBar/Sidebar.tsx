import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <motion.aside
      initial={false}
      className="fixed md:sticky top-0 left-0 h-screen bg-[#111] border-r border-[#2a2a2a] z-50 flex flex-col overflow-hidden whitespace-nowrap"
    >
      <div className="flex items-center h-[60px] px-4 justify-between border-b border-[#2a2a2a]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-bold tracking-tight text-[#f0c060]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Barber<span className="text-[#f0f0f0]">Deck</span>
        </motion.span>
      </div>

      <div className="mt-auto p-4 border-t border-[#2a2a2a]">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 h-11 px-3 rounded-xl transition-all w-full border border-[#e57373]/20 text-[#e57373] hover:bg-[#e57373]/10"
        >
          <LogOut size={18} className="shrink-0" />
          <span className="text-sm font-medium">Sair</span>
        </button>
      </div>
    </motion.aside>
  );
}