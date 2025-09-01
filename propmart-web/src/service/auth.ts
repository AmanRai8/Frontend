import { api } from "../api/api";

export const authApi = {
  login: async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  },

  register: async (user: {
    userName: string;
    email: string;
    password: string;
    role: string;
  }) => {
    const res = await api.post("/auth/register", user);
    return res.data;
  },
  getProfile: async () => {
    const res = await api.get("/users");
    return res.data;
  },
};
