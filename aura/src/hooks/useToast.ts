import { createContext, useContext } from "react";
// import { ToastContext } from "../context/ToastContext";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastContextProps {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe ser usado dentro de un ToastProvider");
  }
  return context;
};
