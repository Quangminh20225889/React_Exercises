import { useState } from "react";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Nam",
      email: "nam@gmail.com",
    },
    {
      id: 2,
      name: "An",
      email: "an123@gmail.com",
    },
    {
      id: 3,
      name: "Huy",
      email: "huy@gmail.com",
    },
    {
      id: 4,
      name: "Nami",
      email: "nami@gmail.com",
    },
  ];

  // Lọc theo tên hoặc email
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Search danh sách người dùng</h1>

      <input
        type="text"
        placeholder="Nhập tên hoặc email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>Không tìm thấy</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}