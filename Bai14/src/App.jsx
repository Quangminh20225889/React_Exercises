import { useState } from "react";
import Model from "./Components/Model";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open model</button>
      {open && (
        <Model closeModel={() => setOpen(false)}>
          <h1>Title</h1>

          <p>Đây là nội dung truyền qua children</p>
        </Model>
      )}
    </div>
  );
}
