import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "../components/Footer.css";


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-2 sticky bottom-0 w-full">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 | copyright uzmausmani@gmail.com | All rights reserved.</p>
        <p className="mt-2">Made with <FaReact className="inline-block text-red-500" /> React and <SiTailwindcss className="inline-block text-blue-500" /> Tailwind CSS</p>
        <a href="https://lordicon.com/">Icons by Lordicon.com</a>
      </div>

    </footer>
  );
}

export default Footer;
