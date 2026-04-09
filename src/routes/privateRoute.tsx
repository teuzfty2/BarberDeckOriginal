// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}