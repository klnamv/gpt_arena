import React, { useState } from 'react';
import '../Dropdown.css';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        <span>GPT 3.5 Turbo</span>
        <svg viewBox="-122.9 121.1 105.9 61.9" className={`icon ${isActive ? 'rotate' : ''}`} width="12" height="10">
          <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2 c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2 C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
        </svg>
      </button>
      <ul className={`dropdown-content ${isActive ? 'active' : ''}`}>
        <li><a href="#">gpt-4-turbo</a></li>
        <li><a href="#">gpt-3.5-turbo-1106</a></li>
        <li><a href="#">gpt-3.5-turbo-16k</a></li>
      </ul>
    </div>
  );
};

export default Dropdown; 
