import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <div
      className="min-h-screen min-w-screen flex bg-[#0d0d0d] text-[#f0f0f0]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;