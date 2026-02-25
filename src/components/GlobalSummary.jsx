import { useEffect, useState } from "react";
import { fetchGlobalData } from "../services/covidApi";

export default function Global() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchGlobalData().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="global">
      <h1>🌍 Global COVID Summary</h1>
      <p>Total Cases: {data.cases}</p>
      <p>Recovered: {data.recovered}</p>
      <p>Deaths: {data.deaths}</p>
    </div>
  );
}