import http from "./httpService";

export async function getCategoryAPI(options = {}) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}
