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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    if (!form.lastName.trim()) newErrors.lastName = "El apellido es requerido";
    if (!form.dni.trim()) newErrors.dni = "El DNI es requerido";
    else if (!/^\d{8}[A-Z]$/.test(form.dni)) newErrors.dni = "DNI inválido";
    if (!form.email) newErrors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";
    if (!form.password) newErrors.password = "La contraseña es requerida";
    else if (form.password.length < 6) newErrors.password = "Debe tener ≥ 6 caracteres";
    if (form.password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";
    if (!form.phoneNumber.trim()) newErrors.phoneNumber = "El teléfono es requerido";
    else if (!/^\d{9}$/.test(form.phoneNumber)) newErrors.phoneNumber = "Teléfono inválido";
    if (!form.country.trim()) newErrors.country = "El país es requerido";
    if (!form.birthDate.trim()) newErrors.birthDate = "La fecha de nacimiento es requerida";
    else {
      const birthDate = new Date(form.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) newErrors.birthDate = "Debes tener al menos 18 años";
    }
    if (!form.licenseNumber.trim()) newErrors.licenseNumber = "El número de licencia es requerido";
    if (!form.specialty.trim()) newErrors.specialty = "La especialidad es requerida";
    if (form.photoUrl && !/^https?:\/\/.+\..+/.test(form.photoUrl)) {
      newErrors.photoUrl = "URL inválida";
    }
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
    setSuccessMessage(null)
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await registerUser(form);
      setSuccessMessage("Usuario creado correctamente");
      onSubmit?.(form);
         // Restablecer los valores del formulario
    setForm({
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
    setConfirmPassword("");
    } catch (err: any) {
      // Manejo de errores específicos
      const errorMessage = err?.response?.data?.message || "Ocurrió un error inesperado";
      if (errorMessage.includes("email")) {
        setErrors(prev => ({ ...prev, email: "El email ya está registrado" }));
      } else {
        setErrors(prev => ({ ...prev, email: errorMessage }));
      }
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
    successMessage,
  };
};

export default useRegisterForm;
