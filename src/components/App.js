import React from "react";
import AutoComplete from "./AutoComplete";

const App = () => {
  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h1>Indian Cities :</h1>
      <AutoComplete suggestions={indianCities} />
    </div>
  );
};

export default App;
