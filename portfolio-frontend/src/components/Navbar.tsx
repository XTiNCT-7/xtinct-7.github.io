// src/components/Navbar.jsx
import React from 'react';

const Navbar:React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;