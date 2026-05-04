import { useState } from "react";

import "./App.css";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function bat() {
    setDarkMode(true);
  }

  function tat() {
    setDarkMode(false);
  }
  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>BackGround</h1>
      <button onClick={darkMode ? tat : bat}>
        {darkMode ? "Tắt DarkMode" : "Bật DarkMode"}
      </button>
    </div>
  );
}

export default App;
