import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-6 w-6 text-rose-400" />
            <span className="text-xl font-serif font-semibold text-rose-900">Sweet Delights</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-rose-900 hover:text-rose-600 transition">Home</a>
            <a href="#about" className="text-rose-900 hover:text-rose-600 transition">About</a>
            <a href="#products" className="text-rose-900 hover:text-rose-600 transition">Products</a>
            <a href="#contact" className="text-rose-900 hover:text-rose-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-rose-900 hover:text-rose-600 transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Updated with solid background */}
        <div className={`
          md:hidden 
          fixed inset-0 top-[73px]
          bg-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center pt-8 space-y-8">
            <a 
              href="#home" 
              className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={closeMenu}
            >
              Products
            </a>
            <a 
              href="#contact" 
              className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;