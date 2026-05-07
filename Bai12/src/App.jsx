import { useState } from "react";
import "./App.css";

export default function App() {
  const [sort, setSort] = useState("asc");

  const items = [
    {
      id: 1,
      name: "Item 1",
      price: 100,
    },
    {
      id: 2,
      name: "Item 2",
      price: 200,
    },
    {
      id: 3,
      name: "Item 3",
      price: 300,
    },
  ];

  const sortedItems = [...items].sort((a, b) => {
    if (sort === "asc") {
      return a.price - b.price;
    }else if (sort === "desc") {
    return b.price - a.price;
    } else {
      return a.name.localeCompare(b.name) ;
    }
  });

  return (
    <div>
      <h1>Sorted Items</h1>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Sort Asc</option>
        <option value="desc">Sort Desc</option>
        <option value="name">Sort Name</option>
      </select>
    </div>
  );
}
