import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white">Home</a></li>
        <li><a href="#features" className="text-white">Features</a></li>
        <li><a href="#contact" className="text-white">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
