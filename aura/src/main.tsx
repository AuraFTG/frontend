import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";
import { AuthProvider } from "./hooks/auth/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
    </AuthProvider>
  </StrictMode>
);
