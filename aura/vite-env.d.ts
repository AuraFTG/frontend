/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // otras VITE_… aquí
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}