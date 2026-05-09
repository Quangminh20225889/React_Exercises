export default function Tabs({ title, activeTab, setActiveTab }) {
  const isActive = activeTab === title;

  return (
    <div className="tab-item">
      <button
        type="button"
        className={`tab-button${isActive ? " active" : ""}`}
        onClick={() => setActiveTab(title)}
      >
        <span className="tab-label">{title}</span>
      </button>
    </div>
  );
}
