import { useEffect, useState } from "react";
import { fetchWithOpts } from "../../hooks/useFetch";

function DashboardPage() {
  const url = "https://fakerapi.it/api/v1/persons";
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const handleResponse = async () => {
      const result = await fetchWithOpts(url);
      const arrData = result.data;
      // console.log(arrData.data);
      setResponse(arrData.data);
    };

    handleResponse();
  }, []);

  return (
    <section>
      <article>
        <h2 className="text-xl mb-4">Dashboard</h2>
        {/* {response && JSON.stringify(response)} */}
        {response != null &&
          response.map((item) => {
            return (
              <div key={item.id} className="flex gap-2">
                <p>{item.firstname}</p>
                <p>{item.lastname}</p>
              </div>
            );
          })}
      </article>
    </section>
  );
}

export default DashboardPage;
