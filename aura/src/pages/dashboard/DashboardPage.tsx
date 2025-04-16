import { useEffect, useState } from "react";
import { fetchWithOpts } from "../../hooks/useFetch";
<<<<<<< HEAD
import { MdDelete } from "react-icons/md";



interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  // Puedes agregar más propiedades según lo que necesites de la API
  // Por ejemplo: location, picture, etc.
}

const DashboardPage = () => {
  const url = "./user.json";
=======
import { User } from "../../types/types";

function DashboardPage() {
  const url = "https://randomuser.me/api/?results=10";
>>>>>>> 8c2e4baf5c645aa773febca670c62bdb2bbb4cd0
  const [response, setResponse] = useState<User[] | null>(null);

  useEffect(() => {
    const handleResponse = async () => {
      const result = await fetchWithOpts(url);
      const arrData = result.data;
<<<<<<< HEAD
      console.log(arrData);
      setResponse(arrData as User[]);
=======
      // console.log(arrData.results);
      setResponse(arrData.results as User[]);
>>>>>>> 8c2e4baf5c645aa773febca670c62bdb2bbb4cd0
    };

    handleResponse();
  }, []);

  return (
    <section className="container">
      <article>
        <h2 className="text-xl mb-4">Dashboard</h2>
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
                    <th className="py-3 px-4 border-b text-left">Roll</th>
                    <th className="py-3 px-4 border-b text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {response.map((user) => (
<<<<<<< HEAD
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">
                        <p> {user.id}</p>
=======
                    <tr
                      key={user.login.uuid}
                      className="even:bg-gray-200 odd:bg-white hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 border-b">
                        <img
                          src={user.picture.thumbnail}
                          alt={`${user.name.first} ${user.name.last}`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
>>>>>>> 8c2e4baf5c645aa773febca670c62bdb2bbb4cd0
                      </td>
                      <td className="py-3 px-4 border-b">{user.name}</td>
                      <td className="py-3 px-4 border-b">{user.email}</td>
                      <td className="py-3 px-4 border-b">
                        <select value={user.role} name="" id="">
                            <option value="Profesional">Profesional</option>
                            <option value="Secretaria">Secretaria</option>
                            <option value="admin">Admin</option>
                          </select>
                        </td>
                      <td className="py-3 px-4 border-b"> 
                        <button type="button">
                        <MdDelete style={{ width: "2rem", height: "2rem"}} />
                        </button>
                        </td>
                      <td className="py-3 px-4 border-b">
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
}

export default DashboardPage;
<<<<<<< HEAD



interface DashboardPageProps{
  

}
// <ul>
//   <li
//     key={item.login.uuid}
//     className="flex items-center gap-2 mb-3"
//   >
//     <p>{item.name.first}</p>
//     <p>{item.name.last}</p>
//     <img
//       src={item.picture.thumbnail}
//       alt=""
//       className="rounded-full"
//     />
//   </li>
// </ul>
=======
>>>>>>> 8c2e4baf5c645aa773febca670c62bdb2bbb4cd0
