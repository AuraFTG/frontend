import { useState } from "react";
// import { fetchWithOpts } from "../../hooks/useFetch";
import { MdDelete } from "react-icons/md";
import patientsData from "../../../public/patients.json";

const PatientList = () => {
  const [response, setResponse] = useState<patient[]>(patientsData);
  const handleDelete = (id: number) => {
    setResponse((prev) => prev.filter((patient) => patient.id !== id));
  };
  interface patient {
    id: number;
    name: string;
    dni: string;
  }

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
        <h2 className="text-xl mb-4">Lista de pacientes</h2>
        <article>
          {/* {response && JSON.stringify(response)} */}
          {response != null && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">id</th>
                    <th className="py-3 px-4 border-b text-left">Nombre</th>
                    <th className="py-3 px-4 border-b text-left">DNI</th>
                    <th className="py-3 px-4 border-b text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {response.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">
                        <p> {patient.id}</p>
                      </td>
                      <td className="py-3 px-4 border-b">{patient.name}</td>
                      <td className="py-3 px-4 border-b">{patient.dni}</td>
                      <td className="py-3 px-4 border-b">
                        <button
                          type="button"
                          onClick={() => handleDelete(patient.id)}
                          className="cursor-pointer text-red-500 hover:text-red-700"
                        >
                          <MdDelete style={{ width: "2rem", height: "2rem" , color: "gray" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>
      </article>
    </section>
  );
};

export default PatientList;
