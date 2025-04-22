declare module "*.avif" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.css";
declare module "*.scss";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Agrega aquí otras variables de entorno que uses
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
