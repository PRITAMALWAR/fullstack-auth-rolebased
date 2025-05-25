import { useEffect, useState } from "react";
import API from "../utils/api";

export default function AdminPanel() {
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/admin-only")
      .then(res => setData(res.data.message))
      .catch(err => setData("Access denied"));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <p>{data}</p>
    </div>
  );
}
