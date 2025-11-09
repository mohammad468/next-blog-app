const { default: http } = require("./httpService");

export async function signupAPI(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signinAPI(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserAPI() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
