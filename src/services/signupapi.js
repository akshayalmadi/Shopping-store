import http from "./http";

const SignupApi = async (data) => {
  const result = await http.post(`/users`, data);
  return result.data;
};
export { SignupApi };