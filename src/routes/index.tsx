// Lib
import { Routes, Route } from "react-router-dom";

// Componentes
import Dashboard from "../components/pages/data/dashboard";
import Login from "../components/pages/login";
import Register from "../components/pages/register";
import { PrivateRoute } from "./privateRoute";

// Componentes do Barbeiro
import { AgendaBarbeiro } from "../components/components/barbeiro/agendaAvaliacoes";
import { PainelPrincipal } from "../components/components/barbeiro/painelPrincipal";
import { ConfiguracoesBarbeiro } from "../components/components/barbeiro/configuracoes";

// Componentes do Cliente
import { ConfiguracoesCliente } from "../components/components/cliente/configuracoes";
import { ExplorarLojas } from "../components/components/cliente/explorarlojas";
import { MeusAgendamentos } from "../components/components/cliente/meusagendamentos";

// Componentes do Admin
import { ConfiguracoesAdmin } from "../components/components/admin/configuracoes";
import { Gestao } from "../components/components/admin/gestao";
import { PainelBarbearia } from "../components/components/admin/painelbarbearia";

// Placeholders — substitua pelo componente real quando criar
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8 text-white text-xl">{title}</div>
);
export function AppRoutes() {
  return (
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Todas as rotas privadas dentro do layout */}
        <Route element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          {/*ROTAS PRINCIPAL DA PÁGINA*/}
          <Route path="/dashboard" element={<Dashboard />} />
          {/*ROTAS DO BARBEIRO*/}
          <Route path="/userbarbeiro/painelbarbeiro" element={<PainelPrincipal />} />
          <Route path="/userbarbeiro/agenda"         element={<AgendaBarbeiro />} />
          <Route path="/userbarbeiro/configuracoes"  element={<ConfiguracoesBarbeiro />} />
          {/*ROTAS DO CLIENTE*/}
          <Route path="/explorarlojas"    element={<ExplorarLojas />} />
          <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
          <Route path="/configuracoes"    element={<ConfiguracoesCliente />} />
          {/*ROTAS DA BARBEARIA/ADMIN*/}
          <Route path="/useradmin/painelbarbearia" element={<PainelBarbearia />} />
          <Route path="/useradmin/gestao"          element={<Gestao />} />
          <Route path="/useradmin/configuracoes"   element={<ConfiguracoesAdmin />} />
        </Route>
      </Routes>
  );
};