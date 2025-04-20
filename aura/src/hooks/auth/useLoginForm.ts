// hooks/auth/useLoginForm.ts
import { useState } from "react";
import { loginUser, AuthPayload, AuthResponse } from "../api/api";
import { OnSubmitHandlerLogin } from "../../types/types";

interface LoginErrors {
  email?: string;
  password?: string;
}

const useLoginForm = (onSubmit?: OnSubmitHandlerLogin) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Valida el formulario de inicio de sesión.
   *
   * - El email es requerido.
   * - El email debe tener un formato válido.
   * - La contraseña es requerida.
   * - La contraseña debe tener al menos 6 caracteres.
   *
   * @returns {boolean} `true` si el formulario es válido, `false` en caso contrario.
   */
  /*******  d2f3a224-f3ec-4985-ba55-1b8dce97b118  *******/
  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

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

    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const payload: AuthPayload = { email, password };
      const response: AuthResponse = await loginUser(payload);
      // Guardar token y llamar onSubmit
      localStorage.setItem("token", response.token);
      onSubmit?.(response.token);
    } catch (err: any) {
      setErrors(prev => ({ ...prev, email: err.message }));
    } finally {
      setIsLoading(false);
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