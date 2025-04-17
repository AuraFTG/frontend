import LoginForm from "../../components/auth/LoginForm";

function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // TODO Lógica de autenticación
    console.log("Login con:", email, password);
    // Ejemplo: authService.login(email, password).then(() => navigate('/dashboard'));
  };

  return (
    <section className="flex justify-center py-4">
      <LoginForm onSubmit={handleLogin} />
    </section>
  );
}

export default LoginPage;
