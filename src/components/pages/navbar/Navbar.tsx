
import { Menu as MenuIcon } from "lucide-react";

interface NavbarProps {
  onLoginClick?: () => void;
}

export function Navbar({ onLoginClick }: NavbarProps) {

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-6 h-[60px] bg-[#111] border-b border-[#2a2a2a] flex-shrink-0">
      <div className="flex items-center">
    
          <button 
            className="mr-3 text-[#ccc] hover:text-[#f0c060] transition-colors md:hidden"
          >
            <MenuIcon size={24} />
          </button>
   
        
        {/* Mostramos a Logo na Navbar apenas se o usuário NÃO estiver logado ou estiver no Mobile */}
        <span
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif", color: "#f0c060" }}
        >
          Barber<span className="text-[#f0f0f0]">Deck</span>
        </span>
      </div>


        <div className="flex items-center gap-3 md:gap-4">
          <div className="text-right flex flex-col justify-center">
            <p className="text-xs md:text-sm font-bold text-[#f0f0f0] leading-none"></p>
            <p className="text-[10px] md:text-xs text-[#f0c060] font-medium mt-1 uppercase tracking-wider leading-none">
       
            </p>
          </div>
        </div>
   
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={onLoginClick}
            className="px-3 md:px-4 py-1.5 text-xs md:text-sm text-[#ccc] border border-[#3a3a3a] rounded-lg hover:border-[#f0c060] hover:text-[#f0c060] transition-colors">
            Entrar
          </button>
          <button className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-[#111] bg-[#f0c060] rounded-lg hover:bg-[#e0b050] transition-colors">
            Sou barbeiro
          </button>
        </div>
 
    </nav>
  );
}