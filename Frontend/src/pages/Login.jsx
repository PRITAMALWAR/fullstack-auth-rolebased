import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await API.post("/login", form);
    const token = res.data.token;
    const payload = JSON.parse(atob(token.split(".")[1]));
    setUser(payload);
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input placeholder="Email" className="w-full p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 border" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
