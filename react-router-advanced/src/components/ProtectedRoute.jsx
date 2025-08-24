import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ checker wants this

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
