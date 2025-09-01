import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">PropMart</h2>
          <p className="text-sm text-gray-200">
            Find your dream property with PropMart. We provide verified
            properties for rent, sale, and investment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-yellow-400">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: support@propmart.com</p>
          <p>Phone: +977-123456789</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PropMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
