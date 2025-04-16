import { useEffect, useState } from "react";
import { fetchWithOpts } from "../../hooks/useFetch";

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    country: string;
  };
}

function DashboardPage() {
  const url = "https://randomuser.me/api/?results=10";
  const [response, setResponse] = useState<User[] | null>(null);

  useEffect(() => {
    const handleResponse = async () => {
      const result = await fetchWithOpts(url);
      const arrData = result.data;
      // console.log(arrData.results);
      setResponse(arrData.results as User[]);
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
                    <th className="py-3 px-4 border-b text-left">Foto</th>
                    <th className="py-3 px-4 border-b text-left">Nombre</th>
                    <th className="py-3 px-4 border-b text-left">Apellido</th>
                    <th className="py-3 px-4 border-b text-left">País</th>
                  </tr>
                </thead>
                <tbody>
                  {response.map((user) => (
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
                      </td>
                      <td className="py-3 px-4 border-b">{user.name.first}</td>
                      <td className="py-3 px-4 border-b">{user.name.last}</td>
                      <td className="py-3 px-4 border-b">
                        {user.location.country}
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
