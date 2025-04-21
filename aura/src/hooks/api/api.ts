
export interface RegisterPayload {
  email: string;
  password: string;
  dni: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  photoUrl: string;
  birthDate: string;      // ISO YYYY‑MM‑DD
  licenseNumber: string;
  specialty: string;
}
export interface AuthPayload {
  email: string;
  password: string;
}
export interface AuthResponse {
  token: string;
  // ...otros campos que devuelva tu API
}

// URL base sacada de .env
const BASE = import.meta.env.VITE_API_URL

// Función genérica de fetch que inyecta headers JSON + auth
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: Record<string,string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string,string>),
  };

  // Si hay token, lo añadimos
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    // opcional: parsea el JSON de error
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || res.statusText);
  }

  // asumimos siempre JSON
  return res.json() as Promise<T>;
}

// Rutas concretas
export function registerUser(data: RegisterPayload) {
  return request<void>("/auth/professional/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function loginUser(data: AuthPayload) {
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}