import { useState } from "react";
// import { fetchWithOpts } from "../../hooks/useFetch";
import { MdDelete } from "react-icons/md";
import { User } from "../../types/types";
import usersData from "../../../public/user.json";

function DashboardPage() {
  const [response, setResponse] = useState<User[]>(usersData);

  // const url = "/user.json";
  // const [response, setResponse] = useState<User[] | null>(null);

  // useEffect(() => {
  //   const handleResponse = async () => {
  //     const result = await fetchWithOpts(url);
  //     const arrData = result.data;
  //     console.log(arrData);
  //     setResponse(arrData);
  //   };

  //   handleResponse();
  // }, []);

  return (
    <section className="container">
      <article>
        <h2 className="text-xl mb-4">Home Dashboard</h2>
        <article>
          {/* {response && JSON.stringify(response)} */}
          {response != null && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">id</th>
                    <th className="py-3 px-4 border-b text-left">Nombre</th>
                    <th className="py-3 px-4 border-b text-left">Correo</th>
                    <th className="py-3 px-4 border-b text-left">Rol</th>
                    <th className="py-3 px-4 border-b text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {response.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">
                        <p> {user.id}</p>
                      </td>
                      <td className="py-3 px-4 border-b">{user.name}</td>
                      <td className="py-3 px-4 border-b">{user.email}</td>
                      <td className="py-3 px-4 border-b">
                        <select
                          value={user.role}
                          name=""
                          id=""
                          className="cursor-pointer"
                        >
                          <option value="Profesional">Profesional</option>
                          <option value="Secretaria">Secretaria</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 border-b">
                        <button type="button" className="cursor-pointer">
                          <MdDelete style={{ width: "2rem", height: "2rem" }} />
                        </button>
                      </td>
                      <td className="py-3 px-4 border-b"></td>
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
}

export default DashboardPage;
