export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    country: string;
  };
}

export interface FetchResult {
  status: "ok" | "error";
  data: {
    results: User[];
  };
}

export interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

export interface RegisterProps {
  onSubmit?: (name: string, email: string, password: string) => void;
}
