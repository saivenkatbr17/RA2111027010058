// frontend/src/App.js
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [numItems, setNumItems] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.match(/^\d*$/)) {
      setNumItems(value);
      setError("");
    } else {
      setError("Please enter a valid number");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!numItems) {
      setError("Please enter a number");
      return;
    }
    try {
      const response = await axios.get(`/api/products?numItems=${numItems}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>E-Commerce Comparison</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number of items to display:
          <input type="text" value={numItems} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default App;
