import "./ViewToggle.css";

export default function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button
        className={`toggle-btn ${view === "card" ? "active" : ""}`}
        onClick={() => setView("card")}
      >
        🧩 Card View
      </button>

      <button
        className={`toggle-btn ${view === "table" ? "active" : ""}`}
        onClick={() => setView("table")}
      >
        📊 Table View
      </button>
    </div>
  );
}