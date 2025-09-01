// import React, { useState } from "react";
// import { useProperty } from "../../context/PropertyContext";
// import type { PropertyType, PropertyStatus } from "../../types/property";

// const PropertyForm: React.FC = () => {
//   const { createProperty } = useProperty();
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: 0,
//     // type: "HOUSE" as PropertyType,
//     status: "AVAILABLE" as PropertyStatus,
//     latitude: undefined as number | undefined,
//     longitude: undefined as number | undefined,
//     userId: undefined as number | undefined,
//   });

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await createProperty(form);
//     setForm({
//       title: "",
//       description: "",
//       price: 0,
//       type: "House",
//       status: "Available",
//       latitude: undefined,
//       longitude: undefined,
//       userId: undefined,
//     });
//   };

//   return (
//     <form onSubmit={submit} className="p-6 flex flex-col gap-3 max-w-md">
//       <input
//         className="border p-2"
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />
//       <input
//         className="border p-2"
//         placeholder="Description"
//         value={form.description}
//         onChange={(e) => setForm({ ...form, description: e.target.value })}
//       />
//       <input
//         className="border p-2"
//         type="number"
//         placeholder="Price"
//         value={form.price}
//         onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
//       />

//       <select
//         className="border p-2"
//         value={form.type}
//         onChange={(e) =>
//           setForm({ ...form, type: e.target.value as PropertyType })
//         }
//       >
//         <option>HOUSE</option>
//         <option>APARTMENT</option>
//         <option>LAND</option>
//       </select>

//       <select
//         className="border p-2"
//         value={form.status}
//         onChange={(e) => setForm({ ...form, status: e.target.value as any })}
//       >
//         <option>AVAILABLE</option>
//         <option>SOLD</option>
//         <option>RENTED</option>
//       </select>

//       <input
//         className="border p-2"
//         type="number"
//         step="any"
//         placeholder="Latitude"
//         value={form.latitude ?? ""}
//         onChange={(e) =>
//           setForm({
//             ...form,
//             latitude: e.target.value ? Number(e.target.value) : undefined,
//           })
//         }
//       />
//       <input
//         className="border p-2"
//         type="number"
//         step="any"
//         placeholder="Longitude"
//         value={form.longitude ?? ""}
//         onChange={(e) =>
//           setForm({
//             ...form,
//             longitude: e.target.value ? Number(e.target.value) : undefined,
//           })
//         }
//       />

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//         type="submit"
//       >
//         Create Property
//       </button>
//     </form>
//   );
// };

// export default PropertyForm;
