import { createContext, useEffect, useState } from "react";
import type { Paginated, Property } from "../types/property";
import { api } from "../api/api";

interface PropertyContextType {
  propertyData: Property[];
  setPropertyData: (propertyData: Property[]) => void;
}

const PropertyContext = createContext<PropertyContextType>({
  propertyData: [],
  setPropertyData: () => {},
});

const PropertyProvider = ({ children }: any) => {
  const [propertyData, setPropertyData] = useState<Property[]>([]);
  const token = localStorage.getItem("token");
  const fetchProperty = async () => {
    try {
      const response = await api.get<Paginated<Property>>("/property", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (Array.isArray(response.data.data)) {
        setPropertyData(response.data.data);
      } else {
        setPropertyData([]);
      }
    } catch (error) {
      console.error("Error fetching property:", error);
      setPropertyData([]);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <PropertyContext.Provider value={{ propertyData, setPropertyData }}>
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyProvider, PropertyContext };
