export type PropertyStatus = "Available" | "Sold" | "Rent";
export type PropertyType = "House" | "Apartment" | "Land";

export interface Property {
  id: number;
  title: string;
  description?: string;
  price: number;
  status: PropertyStatus;
  type: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  location?: string;
  latitude?: number;
  longitude?: number;
  createdAt: string;
  updatedAt: string;
  image?: string | string[]; // adapt to your API
}

export interface Paginated<T> {
  totalProperties: number;
  currentPage: number;
  limit: number;
  data: T[];
}
