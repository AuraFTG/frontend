import { useState } from "react";
// import { fetchWithOpts } from "../../hooks/useFetch";
import { MdEdit, MdDelete } from "react-icons/md";
import patientsData from "../../../public/patients.json";
import AddPatientModal from "../../components/ui/AddPatientModal";
import { useToast } from "../../hooks/useToast";
import ConfirmModal from "../../components/ui/ConfirmModal";

const PatientList = () => {
  const { showToast } = useToast();
  const [response, setResponse] = useState<patient[]>(patientsData);
  const [editingPatient, setEditingPatient] = useState<patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [deletePatientId, setDeletePatientId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = response.slice(startIndex, endIndex);

  const totalPages = Math.ceil(response.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDeleteWarning = (id: number) => {
    setDeletePatientId(id);
    setIsWarningModalOpen(true);
  };

  const confirmDelete = () => {
    if (deletePatientId !== null) {
      setResponse((prev) =>
        prev.filter((patient) => patient.id !== deletePatientId)
      );
      showToast("Paciente eliminado éxitosamente", "success");
      setDeletePatientId(null);
      setIsWarningModalOpen(false);
    }
  };

  // Encuentra el último ID utilizado (por defecto 20 si no hay pacientes)
  const getLastPatientId = () => {
    // if (patients.length === 0) return 20;
    // return Math.max(...patients.map((patient) => patient.id));
    return 20;
  };

  const handleSavePatient = (patient: { fullName: string; dni: string }) => {
    if (editingPatient) {
      // Modo edición: actualiza el paciente existente
      setResponse((prev) =>
        prev.map((p) =>
          p.id === editingPatient.id
            ? { ...p, name: patient.fullName, dni: patient.dni }
            : p
        )
      );
      console.log("Paciente editado:", patient);
      showToast("Paciente actualizado éxitosamente", "success");
    } else {
      // Modo agregar: agrega un nuevo paciente
      const newPatient = {
        id: getLastPatientId() + 1,
        name: patient.fullName,
        dni: patient.dni,
      };
      setResponse((prev) => [...prev, newPatient]);
      showToast("Paciente agregado éxitosamente", "success");
      console.log("Nuevo paciente guardado:", newPatient);
    }

    // Cierra el modal y limpia el estado de edición
    setEditingPatient(null);
    setIsModalOpen(false);
  };

  interface patient {
    id: number;
    name: string;
    dni: string;
  }

  const handleEdit = (id: number) => {
    const patientToEdit = response.find((patient) => patient.id === id);
    if (patientToEdit) {
      setEditingPatient(patientToEdit);
      setIsModalOpen(true);
    }
  };

  // const url = "/patient.json";
  // const [response, setResponse] = useState<patient[] | null>(null);

  // useEffect(() => {
  //   const handleResponse = async () => {
  //     const result = await fetchWithOpts(url);
  //     const arrData = result.data;
  //     console.log(arrData);
  //     setResponse(arrData as patient[]);
  //   };

  //   handleResponse();
  // }, []);

  return (
    <section className="container">
      <article>
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Lista de pacientes</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer transition-colors duration-300"
          >
            Agregar paciente
          </button>
        </header>
        <AddPatientModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPatient(null);
          }}
          onSave={handleSavePatient}
          lastPatientId={getLastPatientId()}
        />
        <ConfirmModal
          isOpen={isWarningModalOpen}
          onClose={() => setIsWarningModalOpen(false)}
          onDelete={confirmDelete}
        />
        <article>
          {/* {response && JSON.stringify(response)} */}
          {response != null && (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">id</th>
                    <th className="py-3 px-4 border-b text-left">Nombre</th>
                    <th className="py-3 px-4 border-b text-left">DNI</th>
                    <th className="py-3 px-4 border-b text-left">Editar</th>
                    <th className="py-3 px-4 border-b text-left">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">
                        <p> {patient.id}</p>
                      </td>
                      <td className="py-3 px-4 border-b">{patient.name}</td>
                      <td className="py-3 px-4 border-b">{patient.dni}</td>
                      <td className="py-3 px-4 border-b">
                        <button
                          type="button"
                          onClick={() => handleEdit(patient.id)}
                          className="cursor-pointer text-gray-400 hover:text-gray-700 transition-colors duration-300"
                        >
                          <MdEdit
                            style={{
                              width: "2rem",
                              height: "2rem",
                            }}
                          />
                        </button>
                      </td>
                      <td className="py-3 px-4 border-b">
                        <button
                          type="button"
                          onClick={() => handleDeleteWarning(patient.id)}
                          className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-300"
                        >
                          <MdDelete
                            style={{
                              width: "2rem",
                              height: "2rem",
                            }}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>

        {/* Botones de paginación */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 mx-1 rounded cursor-pointer ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PatientList;
