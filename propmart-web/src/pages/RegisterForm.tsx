import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";

//valid roles
const roleOptions = ["Owner", "Customer"];

//Yup schema
const registerSchema = Yup.object({
  userName: Yup.string().trim().required("userName is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email.")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "password must be at least 6 characters.")
    .required("password is required"),
  role: Yup.string()
    .oneOf(roleOptions, "Invalid role selected.")
    .required("Role is required."),
});

export default function Register() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setMessage("");
      setSuccess(false);
      try {
        const res = await fetch("http://localhost:8000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        localStorage.setItem("token", data.token);

        if (res.ok) {
          setMessage("Registered successfully");
          setSuccess(true);
          formik.resetForm();

          // Popup alert
          window.alert("User registered successfully");
          navigate("/");
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        setMessage("Server error.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="p-6 bg-white shadow-lg w-full max-w-md space-y-4 rounded-xl"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <div>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            className="w-full p-2 shadow-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="text-sm text-red-600">{formik.errors.userName}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className="w-full p-2 shadow-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-600">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 shadow-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-600">{formik.errors.password}</p>
          )}
        </div>

        <div>
          <select
            name="role"
            className="w-full p-2 shadow-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0) + role.slice(1)}
              </option>
            ))}
          </select>
          {formik.touched.role && formik.errors.role && (
            <p className="text-sm text-red-600">{formik.errors.role}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`w-full py-2 rounded ${
            formik.isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {formik.isSubmitting ? "Registering..." : "Register"}'
        </button>

        {message && (
          <p
            className={`text-center text-sm ${
              success ? "text-green-600" : "text-red-600"
            }`}
          ></p>
        )}

        <p className="w-full mt-4 text-center">
          Already have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
