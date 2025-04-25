import React, { useState, useEffect } from "react";
import { getProfessionalById } from "../../hooks/api/api"; // nuevo helper
interface UsernameDisplayProps {
name: string;
}

const UsernameDisplay: React.FC<UsernameDisplayProps> = ({ name }) => (
  <div >
    <p >Hola, {name}!</p>
  </div>
);

const Banner: React.FC = () => {
  const [name, setname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getProfessionalById() 
      .then((profile) => setname(profile.name))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Cargando usuario...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="">
      <UsernameDisplay name={name} />
    </div>
  );
};

export default Banner;