import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ✅ Top Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-red-900">
          Logout
        </button>
      </header>

      {/* ✅ Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* ✅ Sidebar */}
        <aside className="bg-white shadow rounded-lg p-4 col-span-1">
          <h2 className="font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Properties</li>
            <li className="hover:text-blue-500 cursor-pointer">Sellers</li>
            <li className="hover:text-blue-500 cursor-pointer">Users</li>
            <li className="hover:text-blue-500 cursor-pointer">Reports</li>
          </ul>
        </aside>

        {/* ✅ Main Dashboard Section */}
        <section className="col-span-3 space-y-6">
          {/* 📊 Statistics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold">Total Properties</h3>
              <p className="text-2xl font-bold text-blue-600">
                {/* Fetch total property count from backend */}
                120
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold">Total Sellers</h3>
              <p className="text-2xl font-bold text-green-600">
                {/* Fetch total seller count from backend */}
                35
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold">Total Users</h3>
              <p className="text-2xl font-bold text-purple-600">
                {/* Fetch total user count from backend */}
                500
              </p>
            </div>
          </div>

          {/* 🏠 Properties Table */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">All Properties</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2 border">Property ID</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Seller</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* ✅ Map through properties fetched from backend */}
                <tr>
                  <td className="p-2 border">#001</td>
                  <td className="p-2 border">Luxury Villa</td>
                  <td className="p-2 border">John Doe</td>
                  <td className="p-2 border text-green-600">Approved</td>
                  <td className="p-2 border">
                    <button className="text-blue-500">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">#002</td>
                  <td className="p-2 border">Apartment</td>
                  <td className="p-2 border">Jane Smith</td>
                  <td className="p-2 border text-yellow-600">Pending</td>
                  <td className="p-2 border">
                    <button className="text-blue-500">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 👤 Sellers Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Sellers</h2>
            <ul className="space-y-2">
              {/* ✅ Fetch sellers list from backend */}
              <li className="flex justify-between border-b pb-2">
                <span>John Doe</span>
                <span className="text-gray-500">15 properties</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Jane Smith</span>
                <span className="text-gray-500">8 properties</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
