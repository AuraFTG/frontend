import { User } from "../pages/dashboard/DashboardPage";

export interface FetchResult {
  status: "ok" | "error";
  data: {
    results: User[];
  };
}
