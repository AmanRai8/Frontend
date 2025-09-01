import { useEffect, useState } from "react";
import { api } from "../api/api";

interface User {
  userName: string;
  avatar?: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get<User>("/users");
        setUser(response.data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex items-center space-x-4 p-4 border rounded shadow">
      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xl font-bold">
            {user?.userName?.slice(0, 2).toUpperCase() || "U"}
          </span>
        )}
      </div>
      <div>
        <p className="font-bold text-lg">{user?.userName}</p>
      </div>
    </div>
  );
};

export default Profile;
