import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([
    { id: 1421, name: "Study", done: false },
    { id: 1842, name: "Football", done: false },
  ]);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState("");


  function addItem(event) {
    event.preventDefault();
    const trim = newTodo.trim();
    if (!trim) {
      setError("Khong duoc de trong");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: trim,
      done: false,
    };

    setItems([...items, newItem]);
    setNewTodo("");
    setError("");
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function checkDone(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  return (
    <div className="app">
      <div className="todo-list">
        <form className="todo-form" onSubmit={addItem}>
          <input
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Nhap Todo ..."
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {items.map((item) => (
          <div className="todo-item" key={item.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => checkDone(item.id)}
                checked={item.done}
              />
              <span className={item.done ? "todo-name done" : "todo-name"}>
                {item.name}
              </span>
            </label>
            <button
              className="delete-button"
              onClick={() => deleteItem(item.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
