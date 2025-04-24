import React, { useState, useEffect } from "react";
import { getProfessionalById } from "../../hooks/api/api"; // nuevo helper

interface UsernameDisplayProps {
name: string;
}

const UsernameDisplay: React.FC<UsernameDisplayProps> = ({ name }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <p className="text-lg font-semibold">Hola, {name}!</p>
  </div>
);

const Banner: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getProfessionalById()
      .then((profile) => setUsername(profile.name))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Cargando usuario...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="">
      <UsernameDisplay name={username} />
    </div>
  );
};

export default Banner;