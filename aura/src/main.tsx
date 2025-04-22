import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import AppRouter from "./routes/AppRouter.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      {/* <App /> */}
      <AppRouter />
    </ToastProvider>
  </StrictMode>
);
