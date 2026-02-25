import { getSeverityColor } from "../utils/severity";
import "./StatsCard.css";

export default function StatsCard({ data }) {
  const color = getSeverityColor(data.cases);

  return (
    <div className={`card ${color}`}>
      <h2>{data.country}</h2>
      <p>😷 Cases: {data.cases.toLocaleString()}</p>
      <p>💚 Recovered: {data.recovered.toLocaleString()}</p>
      <p>⚰️ Deaths: {data.deaths.toLocaleString()}</p>
    </div>
  );
}