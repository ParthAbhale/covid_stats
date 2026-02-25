import { useEffect, useState } from "react";
import { fetchGlobalData } from "../services/covidApi";
import "./Global.css";

export default function Global() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchGlobalData().then((data)=>{setData(data)});
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="global-wrapper">
      <div className="global-card">
        <h1>🌍 Global COVID Overview</h1>

        <div className="global-stats">
          <div className="stat cases">
            <span>Total Cases</span>
            <strong>{data.cases}</strong>
          </div>

          <div className="stat recovered">
            <span>Recovered</span>
            <strong>{data.recovered}</strong>
          </div>

          <div className="stat deaths">
            <span>Deaths</span>
            <strong>{data.deaths}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}