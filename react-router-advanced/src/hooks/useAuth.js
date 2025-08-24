// A very simple mock authentication hook
import { useState } from "react";

export function useAuth() {
  // In a real app, you'd check a global state, context, or token
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}
