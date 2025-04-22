import React, { useState, useEffect } from "react";
import { getProfessionalById } from "../../hooks/api/api"; // nuevo helper

interface UsernameDisplayProps {
  username: string;
}

const UsernameDisplay: React.FC<UsernameDisplayProps> = ({ username }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <p className="text-lg font-semibold">Hola, {username}!</p>
  </div>
);

const Banner: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getProfessionalById()
      .then((profile) => setUsername(profile.username))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Cargando usuario...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <UsernameDisplay username={username} />
    </div>
  );
};

export default Banner;