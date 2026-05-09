import { useState } from "react";
import Tabs from "./Tabs";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("eagle");

  return (
    <div className="app-shell">
      <div className="app-card">
        <h1>Animal Tabs</h1>

        <div className="tabs-row">
          <Tabs
            title="eagle"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            title="white tiger"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            title="cobra"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="content-card">
          {activeTab === "eagle" && (
            <div className="tab-panel">
              <div className="media-wrap">
                <div className="media-shine" aria-hidden />
                <img
                  src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-dai-bang-dep-nhat.jpg"
                  alt="chim"
                />
              </div>
              <h2>🦅 Đại bàng</h2>

              <p>
                <b>Loài / nhóm:</b> Chim săn mồi
              </p>

              <p>
                Đại bàng nổi tiếng với đôi mắt sắc bén và khả năng bay ở độ cao
                lớn.
              </p>

              <ul>
                <li>Sải cánh hơn 2 mét</li>
                <li>Bay rất nhanh</li>
                <li>Thị lực cực tốt</li>
              </ul>
            </div>
          )}

          {activeTab === "white tiger" && (
            <div className="tab-panel">
              <div className="media-wrap">
                <div className="media-shine" aria-hidden />
                <img
                  src="https://i.pinimg.com/736x/38/92/ef/3892efd08d1630c114c3421ec53a8b5c.jpg"
                  alt="hổ"
                />
              </div>
              <h2>🐯 Hổ trắng</h2>

              <p>
                <b>Loài / nhóm:</b> Thú ăn thịt
              </p>

              <p>
                Hổ trắng là biến thể hiếm của hổ Bengal với bộ lông trắng sọc
                đen.
              </p>

              <ul>
                <li>Màu lông do đột biến gen</li>
                <li>Săn mồi ban đêm</li>
                <li>Rất mạnh và nguy hiểm</li>
              </ul>
            </div>
          )}

          {activeTab === "cobra" && (
            <div className="tab-panel">
              <div className="media-wrap">
                <div className="media-shine" aria-hidden />
                <img
                  src="https://e.khoahoc.tv/photos/image/082012/10/snake.jpg"
                  alt="rắn"
                />
              </div>
              <h2>🐍 Rắn hổ mang</h2>

              <p>
                <b>Loài / nhóm:</b> Bò sát có nọc độc
              </p>

              <p>Rắn hổ mang chúa có khả năng bạnh cổ để đe dọa kẻ thù.</p>

              <ul>
                <li>Rắn độc dài nhất thế giới</li>
                <li>Có thể dựng người lên cao</li>
                <li>Nọc độc rất mạnh</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
