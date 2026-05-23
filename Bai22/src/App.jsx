import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Users from "./Users";
import UserDetail from "./UserDetal";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Trang không tồn tại.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<Users />} />
        <Route path="/product/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
