import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Menu, X } from "lucide-react"; // Icons for Mobile Menu
import logo from "../assets/priyamvadalogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-20" src={logo} alt="logo" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium text-neutral-300">
          <Link to="/" className="hover:text-white transition">Portfolio</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/education" className="hover:text-white transition">Education</Link>
          <Link to="/technologies" className="hover:text-white transition">Technologies</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-6 text-2xl text-neutral-300">
          <a href="www.linkedin.com/in/priyamvada-maurya-3a908b245" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/Priya-1626" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="priyamvadamaurya26@gmail.com">
            <MdOutlineMail className="hover:text-red-400 transition" />
          </a>
          <a href="https://www.instagram.com/varsh7594/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 text-white p-4 absolute top-full left-0 w-full">
          <Link to="/" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/about" className="block py-2 text-center" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/education" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/technologies" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Technologies</Link>
          <Link to="/contact" className="block py-2 text-center" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
