import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (!user || !user.id) {
    return (
      <div>
        <h1>404</h1>
        <p>Không tìm thấy user.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Chi tiết User</h1>

      <h2>{user.name}</h2>

      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

export default UserDetail;
