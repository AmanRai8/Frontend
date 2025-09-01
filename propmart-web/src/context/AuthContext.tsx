import { createContext, useEffect, useState, type ReactNode } from "react";
import { authApi } from "../service/auth";

interface User {
  userName: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const profile = await authApi.getProfile();
      setUser(profile);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setUser(null);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await authApi.login(email, password);
      if (res?.token) {
        localStorage.setItem("token", res.token);
        await fetchUser();
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (data: any) => {
    try {
      const res = await authApi.register(data);
      if (res?.token) {
        localStorage.setItem("token", res.token);
        await fetchUser();
      }
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
