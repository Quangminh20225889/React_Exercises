import "./App.css";

function App() {
  const products = [
    {
      name: "Iphone 17",
      id: 1242,
      price: 17000000,
      image: "https://shopdunk.com/images/thumbs/0053835_iphone-17-256gb.png",
    },
    {
      name: "AirPods Pro",
      id: 1225,
      price: 4000000,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181",
    },
    {
      name: "MacBook Air",
      id: 1212,
      price: 27000000,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-1_FMT_WHH?wid=690&hei=720&fmt=p-jpg&qlt=80&.v=YTFkSnBPS2tMZFdhaFNRRkx6VnJZaUd4WmthcldkemtncUgvMzhXenFEVndhQ3N1TEt4d0ZKdVZUQ3ZrNzhjK3cxNEx1QmdlVkdRQUhOMXl2K3pkY3dBb0pjWml6bllCL0Y5a1RKc2gxZjlFM2V1RWVXTHBHVzUxMVFmU1Z0Y2ZNdFgzTjZuSWt6SW96N2hDL1hWZkxR&traceId=1",
    },
    {
      name: "Iphone 16 ProMax",
      id: 1859,
      price: 15000000,
      image:
        "https://cdn.mediamart.vn/images/news/nang-cap-quan-trong-cua-iphone-16-pro-max-ma-nguoi-dung-cuc-ky-quan-tam_c745428b.webp",
    },
  ];
  return (
    <div className="list">
      {products.map((item) => (
        <div className="card">
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>

          <p>{item.price.toLocaleString("vi-VN")} VNĐ</p>

          <button>Xem chi tiết</button>
        </div>
      ))}
    </div>
  );
}
export default App;
