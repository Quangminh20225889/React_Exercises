import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  async function handleSelectUser(id) {
    try {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await response.json();

      setSelectedUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (selectedUser) {
    return (
      <div>
        <h1>User Detail</h1>

        <h2>{selectedUser.name}</h2>

        <p>
          <strong>Email:</strong> {selectedUser.email}
        </p>

        <p>
          <strong>Phone:</strong> {selectedUser.phone}
        </p>

        <p>
          <strong>Website:</strong> {selectedUser.website}
        </p>

        <p>
          <strong>Company:</strong> {selectedUser.company.name}
        </p>

        <button onClick={() => setSelectedUser(null)}>
          Back
        </button>
      </div>
    );
  }

  // list view
  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <button onClick={() => handleSelectUser(user.id)}>
            View Detail
          </button>
        </div>
      ))}
    </div>
  );
}