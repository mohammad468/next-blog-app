import http from "./httpService";

export async function createCommentAPI(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}
