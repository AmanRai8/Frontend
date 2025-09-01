import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

//Yup validation schema
const loginSchema = Yup.object({
  userName: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 character")
    .required("Password is required."),
});

export default function Login() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setMessage("");
      setSuccess(false);
      try {
        const res = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        localStorage.setItem("token", data.token);

        if (res.ok) {
          setSuccess(true);
          navigate("/");
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        console.error(err);
        setMessage("Server Error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <div>
          <input
            type="text"
            name="userName"
            placeholder="youremail@gmail.com"
            className="w-full p-2 rounded shadow-md"
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
            type="password"
            name="password"
            placeholder="password"
            className="w-full rounded shadow-md p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-600">{formik.errors.password}</p>
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
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p
            className={`text-center text-sm ${
              success ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="w-full mt-4 text-center">
          Don't have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/register">Register</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
