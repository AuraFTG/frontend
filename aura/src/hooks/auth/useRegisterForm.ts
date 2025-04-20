// hooks/auth/useRegisterForm.ts
import { useState } from "react";
import { registerUser, RegisterPayload } from "../api/api";
import { OnSubmitHandler } from "../../types/types";

interface FormErrors extends Partial<RegisterPayload> {
  confirmPassword?: string;
}

const useRegisterForm = (onSubmit?: OnSubmitHandler) => {
  const [form, setForm] = useState<RegisterPayload>({
    email: "",
    password: "",
    dni: "",
    name: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    photoUrl: "",
    birthDate: "",
    licenseNumber: "",
    specialty: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.lastName.trim()) newErrors.lastName = "El apellido es requerido";
    if (!form.dni.trim()) newErrors.dni = "El DNI es requerido";
    if (!form.email) newErrors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";
    if (!form.password) newErrors.password = "La contraseña es requerida";
    else if (form.password.length < 6) newErrors.password = "Debe tener ≥ 6 caracteres";
    if (form.password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!form.phoneNumber.trim()) newErrors.phoneNumber = "El teléfono es requerido";
    if (!form.country.trim()) newErrors.country = "El país es requerido";
    if (!form.birthDate.trim()) newErrors.birthDate = "La fecha de nacimiento es requerida";
    if (!form.licenseNumber.trim()) newErrors.licenseNumber = "El número de licencia es requerido";
    if (!form.specialty.trim()) newErrors.specialty = "La especialidad es requerida";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") setConfirmPassword(value);
    else setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await registerUser(form);
      onSubmit?.(form);
    } catch (err: any) {
      setErrors(prev => ({ ...prev, email: err.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    confirmPassword,
    handleChange,
    handleSubmit,
    errors,
    isLoading,
  };
};

export default useRegisterForm;