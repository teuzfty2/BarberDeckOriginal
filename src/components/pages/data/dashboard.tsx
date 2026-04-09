import { Sidebar } from "../sideBar/Sidebar";
import { Navbar } from "../navbar/Navbar";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0d0d0d] text-[#f0f0f0]">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          {/* aqui renderiza a página filha */}
        </main>
      </div>
    </div>
  );
}
