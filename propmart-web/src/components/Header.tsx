import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, handleLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <HomeIcon className="w-6 h-6" />
              <span>PropMart</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/property" className="hover:text-gray-200">
            Property
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Right Side: Register / Profile */}
        <div className="hidden md:flex items-center gap-4">
          {!user && (
            <Link
              to="/register"
              className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-300"
            >
              Register
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <img
                src={user.avatar || "/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{user.userName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">&#x2715;</span> // X
          ) : (
            <span className="text-2xl">&#9776;</span> // ☰
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/property" className="hover:text-gray-200">
              Property
            </Link>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>

            {!user && (
              <Link
                to="/register"
                className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-300"
              >
                Register
              </Link>
            )}

            {user && (
              <div className="flex items-center gap-2">
                <img
                  src={user.avatar || "/default-avatar.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{user.userName}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
