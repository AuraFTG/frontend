import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (patient: { id: number; fullName: string; dni: string }) => void;
  lastPatientId: number;
}

export default function AddPatientModal({
  isOpen,
  onClose,
  onSave,
  lastPatientId = 20,
}: AddPatientModalProps) {
  const [fullName, setFullName] = useState("");
  const [dni, setDni] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; dni?: string }>({});

  const validateForm = () => {
    const newErrors: { fullName?: string; dni?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "El nombre completo es obligatorio";
    }

    if (!dni.trim()) {
      newErrors.dni = "El DNI es obligatorio";
    } else if (!/^\d{8}[A-Z]$/.test(dni) && !/^\d{8}$/.test(dni)) {
      newErrors.dni = "Formato de DNI inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const newId = lastPatientId + 1;
      onSave({ id: newId, fullName, dni });
      setFullName("");
      setDni("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Agregar Nuevo Paciente
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            title="Cerrar"
          >
            <MdOutlineClose size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese nombre y apellido"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="dni"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              DNI
            </label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese DNI"
            />
            {errors.dni && (
              <p className="mt-1 text-sm text-red-600">{errors.dni}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 [&>button]:cursor-pointer">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
