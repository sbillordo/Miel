import React, { useState, useEffect } from 'react';
import { ChefHat, Phone, Mail, Instagram, MapPin, ShoppingBag, Menu, X } from 'lucide-react';

import Hero from './components/Hero';

const App: React.FC = () => {
  const [showOrderButton, setShowOrderButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setShowOrderButton(window.scrollY > homeSectionBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Floating Order Button */}
      {showOrderButton && (
        <a 
          href="#contact" 
          className="fixed bottom-6 right-6 z-50 bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-rose-600 transition-all hover:scale-105 flex items-center space-x-2 animate-fadeIn"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Order</span>
        </a>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ChefHat className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-serif font-semibold text-rose-900">Miel</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-rose-900 hover:text-rose-600 transition">Home</a>
              <a href="#about" className="text-rose-900 hover:text-rose-600 transition">Sobre Mi</a>
              <a href="#products" className="text-rose-900 hover:text-rose-600 transition">Mis Creaciones</a>
              <a href="#contact" className="text-rose-900 hover:text-rose-600 transition">Contactame</a>
              {/* Enlace a ProductList.html */}
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
              <a 
                href="#home" 
                className="text-xl text-rose-900 hover:text-rose-600 transition"
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-xl text-rose-900 hover:text-rose-600 transition"
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                Sobre Mi
              </a>
              <a 
                href="#products" 
                className="text-xl text-rose-900 hover:text-rose-600 transition"
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                Productos
              </a>
              <a 
                href="#contact" 
                className="text-xl text-rose-900 hover:text-rose-600 transition"
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                Contactame
              </a>
              {/* Enlace a ProductList.html */}
              <a 
                href="ProductList.html" 
                className="text-xl text-rose-900 hover:text-rose-600 transition"
                onClick={() => document.body.classList.remove('mobile-menu-open')}
              >
                Lista de Productos
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chef portrait"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif font-bold text-rose-900">Sobre mi</h2>
              <p className="text-rose-700 leading-relaxed">
                Estudíe la carrera de Profesional Gastronica en el IAG. Al graduarme he trabajado en como Pastelera de Almendra Resto a partir de 2021. Desde 2022 pase a ser Jefa de Pastelería.
              </p>
              <p className="text-rose-700 leading-relaxed">
                En Noviembre de 2022 comence mi rol como Pastelera y Responsable de Desayuno en el Hotel Grau Roig de Andorra, el cual goza de la acreditación 5 estrellas.
              </p>
              <p className="text-rose-700 leading-relaxed">
                Desde 2023 me desempeño de manera independiente llevando adelante trabajos por encargo sumamente perzonalisados.
              </p>
              {/* Botón para ir a ProductList */}
              <a 
                href="ProductList.html" 
                className="mt-4 inline-block bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-rose-600 transition-all hover:scale-105"
              >
                Ver Lista de Productos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-rose-900 text-center mb-12">Mis creaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic French Macarons",
                image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Light and airy almond meringue cookies with various premium fillings"
              },
              {
                name: "Artisan Croissants",
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Buttery, flaky croissants made with premium French butter"
              },
              {
                name: "Custom Celebration Cakes",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Beautifully decorated cakes perfect for any special occasion"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-rose-900 mb-2">{product.name}</h3>
                  <p className="text-rose-700">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-rose-900 text-center mb-12">¡Hablame!</h2>
          <div className="max-w-2xl mx-auto bg-rose-50 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-rose-400" />
                <span className="text-rose-700">+34 645-329-871</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-rose-400" />
                <span className="text-rose-700">colomerrocio2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="h-6 w-6 text-rose-400" />
                <span className="text-rose-700">@miel</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-rose-400" />
                <span className="text-rose-700">Que te importa</span>
              </div>
              <p className="text-rose-700 mt-6">
                Para pedidos se deben pedir cotizaciones.
                Todo pedido se debe realizar con más de 72 horas de antelación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-rose-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-serif font-semibold">Miel</span>
          </div>
          <p className="text-rose-200">© {new Date().getFullYear()} Miel. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};



export default App;