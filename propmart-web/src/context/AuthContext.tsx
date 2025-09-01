import { createContext, useEffect, useState, type ReactNode } from "react";
import { authApi } from "../service/auth";
// import { api } from "../api/api";

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

// create a context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Defint provider props type
// interface AuthProviderProps {
//   children: ReactNode;
// }

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children}) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const profile = await authApi.getProfile();
      setUser(profile);
    }
  }
}
