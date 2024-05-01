import React from 'react';
import "../components/Navbar.css";
import { FaTasks } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='flex justify-between sticky top-0 bg-blue-800 text-white p-3 '>
      <div className="logo text-2xl flex items-center"> {/* Wrap text and icon in a flex container */}
        <span className="mr-2 font-bold">Container Manager</span> {/* Add some margin between text and icon */}

        
            <GiCargoShip /> {/* Apply animation class */}
  

      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold  transition-all'>About</li>
        <li className='cursor-pointer hover:font-bold  transition-all  text-yellow'>Home</li>
        <li className='cursor-pointer hover:font-bold  transition-all text-yellow'>Contact Us</li>
        <li className='cursor-pointer hover:font-bold  transition-all text-yellow'>Your Tasks</li>
      </ul>
    </nav>
  );
}

export default Navbar;
