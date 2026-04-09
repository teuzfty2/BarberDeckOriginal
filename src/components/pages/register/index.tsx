import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center px-4 bg-black font-sans text-[#f0f0f0]">
      <div className="w-full max-w-md bg-[#111] border border-[#2a2a2a] rounded-xl p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-10 pt-6 sm:pt-4">
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-[#f0f0f0]">Barber</span>
              <span style={{ color: "#c98805" }}>Deck</span>
            </h1>
            <p className="text-sm sm:text-base text-white">
              Crie sua conta agora!
            </p>
          </div>

          <div className="space-y-1 pt-2">
            <label htmlFor="tel" className="text-xs sm:text-sm font-medium text-[#ccc] block">
              Telefone
            </label>
            <input
              id="tel"
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="Digite seu telefone"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#0d0d0d] focus:bg-[#020101] border border-[#3a3a3a] rounded-xl text-[#f0f0f0] placeholder-[#666]"
            />
          </div>

          <div className="space-y-1 pt-2">
            <label htmlFor="reg-email" className="text-xs sm:text-sm font-medium text-[#ccc] block">
              E-mail
            </label>
            <input
              id="reg-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu@email.com"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#0d0d0d] focus:bg-[#020101] border border-[#3a3a3a] rounded-xl text-[#f0f0f0] placeholder-[#666]"
            />
          </div>

          <div className="space-y-1 pt-2">
            <label htmlFor="reg-password" className="text-xs sm:text-sm font-medium text-[#ccc] block">
              Senha
            </label>
            <input
              id="reg-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#0d0d0d] focus:bg-[#020101] border border-[#3a3a3a] rounded-xl text-[#f0f0f0] placeholder-[#666]"
            />
          </div>

          <div className="space-y-1 pt-2">
            <label htmlFor="confirm-password" className="text-xs sm:text-sm font-medium text-[#ccc] block">
              Repetir Senha
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-[#0d0d0d] focus:bg-[#020101] border border-[#3a3a3a] rounded-xl text-[#f0f0f0] placeholder-[#666]"
            />
          </div>

          <button
            type="button"
            onClick={() => navigate("/", { replace: true })}
            className="w-full py-3 sm:py-3.5 mt-4 bg-[#f0c060] hover:bg-[#e0b050] text-[#111] font-bold text-sm sm:text-base rounded-xl transition-all shadow-[0_0_15px_rgba(240,192,96,0.2)] hover:shadow-[0_0_25px_rgba(240,192,96,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Cadastrar
          </button>

          <div className="mt-6 text-center text-xs sm:text-sm text-[#888]">
            Já tem uma conta?{" "}
            <button
              onClick={() => navigate("/dashboard", { replace: true })}
              className="text-[#f0c060] hover:text-[#e0b050] font-medium transition-colors"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}