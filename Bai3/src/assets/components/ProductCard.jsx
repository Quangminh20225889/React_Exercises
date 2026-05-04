import "./style.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{price.toLocaleString("vi-VN")} VNĐ</p>

      <button>Xem chi tiết</button>
    </div>
  );
}

export default ProductCard;
