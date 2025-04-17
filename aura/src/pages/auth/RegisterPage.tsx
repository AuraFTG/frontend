import RegisterForm from "../../components/auth/RegisterForm";

function RegisterPage() {
  const handleRegister = (name: string, email: string, password: string) => {
    // Aquí implementarías la lógica de registro
    console.log("Registro con:", name, email, password);
    // Ejemplo: authService.register(name, email, password).then(() => navigate('/auth/login'));
  };

  return (
    <section className="flex justify-center py-4">
      <RegisterForm onSubmit={handleRegister} />
    </section>
  );
}

export default RegisterPage;
