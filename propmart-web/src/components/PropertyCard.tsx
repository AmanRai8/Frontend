import React from "react";
import { MapPin, BedDouble, Bath, AreaChart } from "lucide-react";
import type { Property } from "../types/property";

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const imageSrc = Array.isArray(property.image)
    ? property.image[0]
    : property.image;

  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-white">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={imageSrc || "/placeholder.jpg"}
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-white/90 text-gray-800 text-sm px-3 py-1 rounded-lg shadow">
          ${property.price.toLocaleString()}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {property.description}
        </p>

        {/* Details */}
        <div className="mt-3 flex items-center gap-4 text-gray-700 text-sm">
          {property.status && (
            <span className="flex items-center gap-1">{property.status}</span>
          )}
          {property.type && (
            <span className="flex items-center gap-1">{property.type}</span>
          )}
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble size={16} /> {property.bedrooms}
            </span>
          )}
          {property.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={16} /> {property.bathrooms}
            </span>
          )}
          {property.area && (
            <span className="flex items-center gap-1">
              <AreaChart size={16} />
              {property.area}
            </span>
          )}
          {property.location && (
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {property.location}
            </span>
          )}
          {property.latitude && (
            <span className="flex items-center gap-1">{property.latitude}</span>
          )}
          {property.longitude && (
            <span className="flex items-center gap-1">
              {property.longitude}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
