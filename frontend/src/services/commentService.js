import http from "./httpService";

export async function createCommentAPI(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsAPI(options = {}) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}
