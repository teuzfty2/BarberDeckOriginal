// data/navItems.ts
import {
  LayoutDashboard,
  Calendar,
  Search,
  CalendarClock,
  Users,
  Settings as SettingsIcon,
} from "lucide-react";

export const navItemsBarbeiro = [
  {
    icon: LayoutDashboard,
    label: "Painel Principal",
    path: "/userbarbeiro/painelbarbeiro",
  },
  {
    icon: Calendar,
    label: "Agenda & Avaliações",
    path: "/userbarbeiro/agenda",
  },
  {
    icon: SettingsIcon,
    label: "Configurações",
    path: "/userbarbeiro/configuracoes",
  },
];

export const navItemsCliente = [
  { icon: Search, label: "Explorar Lojas", path: "/explorarlojas" },
  {
    icon: CalendarClock,
    label: "Meus Agendamentos",
    path: "/meusagendamentos",
  },
  { icon: SettingsIcon, label: "Configurações", path: "/configuracoes" },
];

export const navItemsAdmin = [
  {
    icon: LayoutDashboard,
    label: "Painel da Loja",
    path: "/useradmin/painelbarbearia",
  },
  { icon: Users, label: "Gestão", path: "/useradmin/gestao" },
  {
    icon: SettingsIcon,
    label: "Configurações",
    path: "/useradmin/configuracoes",
  },
];
