import { useState } from "react";

export default function App() {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library.",
    },
    {
      id: 2,
      question: "What is Vite?",
      answer: "Vite is a frontend build tool.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX lets you write HTML in JS.",
    },
  ];

  function handleToggle(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div className="container">
      <h1>FAQ Accordion</h1>

      {faqs.map((faq) => (
        <div className="item" key={faq.id}>
          <div
            className="question"
            onClick={() => handleToggle(faq.id)}
          >
            <h3>{faq.question}</h3>

            <span>
              {activeId === faq.id ? "-" : "+"}
            </span>
          </div>

          <div
            className={
              activeId === faq.id
                ? "answer show"
                : "answer"
            }
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}