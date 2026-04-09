import { Sidebar } from "./sideBar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-[#f0f0f0]">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-[#888] mt-2">Bem-vindo ao BarberDeck!</p>
      </main>
    </div>
  );
}