import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "user" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await API.post("/signup", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4 bg-white shadow">
      <h2 className="text-xl font-bold">Signup</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        name="username"
        placeholder="Username"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.username}
      />
      <input
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.email}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.password}
      />
      <select
        name="role"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.role}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
