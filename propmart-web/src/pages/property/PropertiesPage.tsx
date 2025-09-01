import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import { api } from "../../api/api";

type Property = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string | string[];
  bedrooms?: number | null;
  bathrooms?: number | null;
  location?: string;
};

const PropertiesPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const propertiesPerPage = 6;

  const fetchProperties = async (page: number) => {
    try {
      const res = await api.get<Property>(
        `/property?page=${page}&limit=${propertiesPerPage}`
      );
      const { data, totalProperties } = res.data;

      // map backend fields to frontend
      const formatted = data.map((p: any) => ({
        id: p.id,
        name: p.title,
        description: p.description,
        price: p.price,
        image:
          p.images && p.images.length > 0 ? p.images : ["/placeholder.jpg"],
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        location: `${p.latitude}, ${p.longitude}`,
      }));

      setProperties(formatted);
      setTotalPages(Math.ceil(totalProperties / propertiesPerPage));
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Available Properties</h1>

      {/* Property cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertiesPage;
