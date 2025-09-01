import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const user = useContext(AuthContext);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center bg-blue-600 text-white py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Explore the best properties for sale and rent across Nepal. Verified
            listings for your peace of mind.
          </p>

          {/* Conditional button */}
          {/* {user ? (
            <Link
              to="/profile"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300"
            >
              View profile
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300"
            >
              Register
            </Link>
          )} */}

          <Link
            to="/property"
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300"
          >
            Browse Property
          </Link>
        </section>

        {/* Featured Properties */}
        <section className="container mx-auto py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Featured Properties
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Property 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="House"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Beautiful House</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$35,000</p>
                <Link
                  to="/property/1"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Example Property Card */}
            {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="House"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Beautiful House</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$35,000</p>
                <Link
                  to="/propert/1"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div> 
            </div> */}

            {/* Add more cards as needed */}
            {/* </div> */}

            {/* Property 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Apartment"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Modern Apartment</h3>
                <p className="text-gray-600">Pokhara, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$25,000</p>
                <Link
                  to="/property/2"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Villa"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Luxury Villa</h3>
                <p className="text-gray-600">Lalitpur, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$120,000</p>
                <Link
                  to="/property/3"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Property 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Land"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Prime Land Plot</h3>
                <p className="text-gray-600">Chitwan, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$15,000</p>
                <Link
                  to="/property/4"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Property 5 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Commercial"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Commercial Space</h3>
                <p className="text-gray-600">Biratnagar, Nepal</p>
                <p className="font-bold text-blue-600 mt-2">$50,000</p>
                <Link
                  to="/property/5"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 text-center py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Are you a Property Owner?
          </h2>
          <p className="text-gray-700 mb-6">
            List your property with us and reach thousands of verified buyers
            and renters.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            Register Now
          </Link>
        </section>
      </main>
    </div>
  );
}
