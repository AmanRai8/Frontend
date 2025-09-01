import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { PropertyContext } from "../../context/PropertyContext";
import axios from "axios";
import { api } from "../../utils/api";
// import axios from "axios";

export default function AddBooks() {
  const token = localStorage.getItem("token");
  const { setPropertyData } = useContext(PropertyContext);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const propertyData = JSON.stringify(Object.fromEntries(formData.entries())); // Convert FormData to object
    const parsedData = JSON.parse(propertyData);
    const propertyDataReq = {
      ...parsedData,
      isbn: parseInt(parsedData.isbn, 10),
      available_copies: parseInt(parsedData.available_copies, 10),
      total_copies: parseInt(parsedData.total_copies),
      published_date: new Date(parsedData.published_date),
    };

    try {
      const response = await api({
        url: "/property",
        method: "POST",
        data: propertyDataReq,
      });

      setPropertyData((prev) => [...prev, response.data]);
      alert("Property added successfully!");
      navigate("/property");
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property.");
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Add Books</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-row space-x-4">
          
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black w-[150px] text-white py-2 rounded-md cursor-pointer"
          >
            + Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
