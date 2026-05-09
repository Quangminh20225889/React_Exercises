export default function Modal({ closeModel, children }) {
  return (
    <div
      onClick={closeModel}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          width: "300px",
          margin: "100px auto",
          padding: "20px",
        }}
      >
        {children}

        <button onClick={closeModel}>Close</button>
      </div>
    </div>
  );
}
