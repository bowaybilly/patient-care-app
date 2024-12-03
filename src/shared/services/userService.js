import apiService from "./apiService";

// Example CRUD operations for "users"
export const getUsers = async () => {
  const response = await apiService.get("/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await apiService.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await apiService.post("/users", userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await apiService.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await apiService.delete(`/users/${id}`);
  return response.data;
};
