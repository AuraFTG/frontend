import { useState, useEffect } from "react";
import { LoaderProps } from "../../types/types";

export default function Loader({
  size = "medium",
  color = "primary",
  text,
  fullScreen = true,
}: LoaderProps) {
  const [dots, setDots] = useState(".");

  // Animación de los puntos suspensivos si hay texto
  useEffect(() => {
    if (!text) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  // Mapeo de tamaños a clases
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4",
  };

  // Mapeo de colores a clases
  const colorClasses = {
    primary: "border-blue-500",
    secondary: "border-purple-500",
    success: "border-green-500",
    danger: "border-red-500",
    warning: "border-yellow-500",
  };

  // Clases para el spinner
  const spinnerClasses = `
    inline-block rounded-full border-solid
    ${sizeClasses[size]}
    ${colorClasses[color]}
    border-t-transparent
    animate-spin
  `;

  // Renderizado del componente
  const loaderContent = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={spinnerClasses}></div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">
          {text}
          {dots}
        </p>
      )}
    </div>
  );

  // Si es pantalla completa, lo centramos en toda la pantalla
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-[-1]">
        {loaderContent}
      </div>
    );
  }

  // Si no es pantalla completa, lo renderizamos normalmente
  return loaderContent;
}
