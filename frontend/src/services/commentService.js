import http from "./httpService";

export async function createCommentAPI(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsAPI(options = {}) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}

export async function getCommentAPI(id, options = {}) {
  return http.get(`/comment/${id}`, options).then(({ data }) => data.data);
}

export async function deleteCommentAPI(id, options = {}) {
  return http.delete(`/comment/remove/${id}`, options).then(({ data }) => data.data);
}

export async function updateCommentAPI(id, data, options = {}) {
  return http.patch(`/comment/update/${id}`, data, options).then(({ data }) => data.data);
}
