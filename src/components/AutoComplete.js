import React, { useState } from "react";

export default function AutoComplete({ suggestions }) {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const newFiltered = suggestions.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(newFiltered);
  }

  function handleSelect(city) {
    setInput(city);
    setFiltered([]);
  }

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <label htmlFor="city-input">Search cities of India:</label>
      <input
        id="city-input"
        data-testid="autocomplete-input"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search City.."
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />

      {filtered.length > 0 && (
        <ul
          data-testid="autocomplete-list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            borderTop: "none",
            maxHeight: "150px",
            overflowY: "auto",
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          {filtered.map((city, index) => (
            <li
              key={index}
              data-testid={`autocomplete-item-${index}`}
              onClick={() => handleSelect(city)}
              style={{
                padding: "8px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#f0f0f0")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "white")
              }
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
