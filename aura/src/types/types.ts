export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface FetchResult {
  status: "ok" | "error";
  data: {
    results: User[];
  };
}

export type OnSubmitHandler = (
  name: string,
  email: string,
  password: string
) => void;

export type OnSubmitHandlerLogin = (email: string, password: string) => void;

export interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

export interface RegisterProps {
  onSubmit?: (name: string, email: string, password: string) => void;
}

export type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  text?: string;
  fullScreen?: boolean;
};
