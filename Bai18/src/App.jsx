import { useState } from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  const users = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
    { id: 4, name: "Phạm Minh D" },
    { id: 5, name: "Hoàng Phương E" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <div>
      <h1>Search User</h1>

      <input
        type="text"
        placeholder="Nhập tên để tìm..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <h3>Keyword debounce: {debouncedValue}</h3>

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
        </div>
      ))}
    </div>
  );
}