import http from "./http";

const LoginApi = async (data) => {
  const result = await http.post(`/auth/login`, data);
  return result.data;
};
export { LoginApi };