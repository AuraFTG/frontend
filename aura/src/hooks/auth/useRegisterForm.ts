import { useState } from "react";
import { OnSubmitHandler } from "../../types/types";

const useRegisterForm = (onSubmit?: OnSubmitHandler) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

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

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        // Aquí iría la llamada a tu API de registro
        // Por ahora, simulamos un delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (onSubmit) {
          onSubmit(name, email, password);
        }
      } catch (error) {
        console.error("Error al registrarse:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    confirmPassword,
    setConfirmPassword,
    setPassword,
    errors,
    isLoading,
    handleSubmit,
  };
};

export default useRegisterForm;
