export interface FetchResult<T> {
  status: "ok" | "error";
  data: T | Error;
}
