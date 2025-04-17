import { useState } from "react";
import { OnSubmitHandlerLogin } from "../../types/types";
import { useNavigate } from "react-router-dom";

const useLoginForm = (onSubmit?: OnSubmitHandlerLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
    if (validateForm()) {
      setIsLoading(true);

      try {
        // TODO llamada a la API de autenticación
        // Por ahora, simulamos un delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (onSubmit) {
          onSubmit(email, password);
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    isLoading,
    handleSubmit,
  };
};

export default useLoginForm;
