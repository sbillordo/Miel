import React from 'react';
import {ChefHat, Menu, X } from 'lucide-react';


const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
              <ChefHat className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-serif font-semibold text-rose-900">Miel</span>
            </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="index.html" className="text-rose-900 hover:text-rose-600 transition">Home</a>
            <a href="index.html#about" className="text-rose-900 hover:text-rose-600 transition">Sobre Mi</a>
            <a href="index.html#products" className="text-rose-900 hover:text-rose-600 transition">Mis Creaciones</a>
            <a href="index.html#contact" className="text-rose-900 hover:text-rose-600 transition">Contactame</a>
            <a href="ProductList.html" className="text-rose-900 hover:text-rose-600 transition">Lista de Productos</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => document.body.classList.toggle('mobile-menu-open')}
            className="md:hidden text-rose-900 hover:text-rose-600 transition"
          >
            <Menu className="h-6 w-6 mobile-menu-icon" />
            <X className="h-6 w-6 mobile-menu-close hidden" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-menu md:hidden fixed inset-0 top-[73px] bg-white transform translate-x-full transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center pt-8 space-y-8">
            <a href="index.html#home" className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={() => document.body.classList.remove('mobile-menu-open')}
            >
              Home
            </a>
            <a href="index.html#about" className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={() => document.body.classList.remove('mobile-menu-open')}
            >
              Sobre Mi
            </a>
            <a href="index.html#products" className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={() => document.body.classList.remove('mobile-menu-open')}
            >
              Productos
            </a>
            <a href="index.html#contact" className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={() => document.body.classList.remove('mobile-menu-open')}
            >
              Contactame
            </a>
            <a href="ProductList.html" className="text-xl text-rose-900 hover:text-rose-600 transition"
              onClick={() => document.body.classList.remove('mobile-menu-open')}
            >
              Lista de Productos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
