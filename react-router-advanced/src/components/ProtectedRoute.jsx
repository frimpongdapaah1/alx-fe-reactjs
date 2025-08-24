import { Navigate } from "react-router-dom";

// Fake auth state (replace with real auth in real apps)
const isAuthenticated = localStorage.getItem("auth") === "true";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
