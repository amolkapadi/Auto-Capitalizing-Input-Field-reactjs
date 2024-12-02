import React, { useState } from 'react';
import './App.css';  // Import the CSS file for styling

function App() {
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    // Capitalize the first letter if it's not empty
    if (value.length === 1) {
      setInputValue(value.toUpperCase()); // Capitalize first character
    } else {
      setInputValue(value); // Keep the rest of the input unchanged
    }
  };

  return (
    <div className="app-container">
    <h4>Auto-Capitalizing Input Field</h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="centered-input"
        placeholder="Type here"
      />
    </div>
  );
}

export default App;
