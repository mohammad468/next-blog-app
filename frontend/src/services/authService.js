const { default: http } = require("./httpService");

export async function signupAPI(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}
