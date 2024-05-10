import React, { useState, useEffect } from 'react'; 
import '../styles/Dropdown.css';

// Your API function (slightly modified for clarity) 
async function query(prompt) { 
  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-base", { 
    headers: { Authorization: "Bearer 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" }, 
    method: "POST", 
    body: JSON.stringify({ "inputs": prompt }), 
  }); 
  const result = await response.json(); 
  return result; }

const Dropdown = () => { 
  const [isActive, setIsActive] = useState(false); 
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Example 
  const [generatedText, setGeneratedText] = useState('');

const toggleDropdown = () => { setIsActive(!isActive); };

const handleOptionClick = async (option) => { 
  setSelectedOption(option); 
  setIsActive(false);

try {
  const response = await query(`${option} `); // Add space after the prompt
  const generatedCompletion = response.generated_text; // Assuming API structure
  setGeneratedText(generatedCompletion);
} catch (error) {
  console.error("Error fetching from model:", error);
  setGeneratedText("An error occurred."); 
}
};

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        <span>{selectedOption}</span> {/* Display selected option */}
        <svg
          viewBox="-122.9 121.1 105.9 61.9"
          className={`icon ${isActive ? "rotate" : ""}`}
          width="12"
          height="10"
        >
          <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2 c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2 C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
        </svg>
      </button>
      <ul className={`dropdown-content ${isActive ? "active" : ""}`}>
        <li>
          <a href="#" onClick={() => handleOptionClick("gpt-4-turbo")}>
            gpt-4-turbo
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleOptionClick("gpt-3.5-turbo-1106")}>
            gpt-3.5-turbo-1106
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleOptionClick("gpt-3.5-turbo-16k")}>
            gpt-3.5-turbo-16k
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleOptionClick("flan-t5-base")}>
            flan-t5-base
          </a>
        </li>
      </ul>
      <div className="generated-text">
    <p>{generatedText}</p>
  </div> 
    </div>
  );
};

export default Dropdown;




