import { useState } from "react";
import "./CountrySelector.css";

export default function CountrySelector({ countries, onSelect }) {
  const [query, setQuery] = useState("");

  const filtered = countries.filter(c =>
    c.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="country-select-wrapper">
      <input
        type="text"
        placeholder="🔍 Search country..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="country-input"
      />

      {query && (
        <ul className="country-dropdown">
          {filtered.map(c => (
            <li
              key={c.country}
              onClick={() => {
                onSelect(c);
                setQuery(c.country);

              }}
            >
              <img src={c.countryInfo.flag} alt={c.country} />
              <span>{c.country}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}