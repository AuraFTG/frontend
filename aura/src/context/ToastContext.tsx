// ToastContext.tsx
import React, { useState, useCallback } from "react";
import Toast from "../components/ui/Toast"; // Importamos el componente Toast que creamos
import { ToastContext, ToastType } from "../hooks/useToast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: ToastType;
    duration: number;
    id: number;
  } | null>(null);

  const showToast = useCallback(
    (message: string, type: ToastType = "success", duration: number = 3000) => {
      setToast({
        visible: true,
        message,
        type,
        duration,
        id: Date.now(), // Generamos un ID único basado en el tiempo
      });
    },
    []
  );

  const handleClose = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={handleClose}
        />
      )}
    </ToastContext.Provider>
  );
};
