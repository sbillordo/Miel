import React from 'react';
import ImageCarousel from './ImageCarousel';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content - stacks on top on mobile */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-rose-900 opacity-0 animate-fadeIn">
              Pastelería con tecnica y pasión.
            </h1>
            <p className="text-lg text-rose-700 opacity-0 animate-fadeIn animation-delay-300">
              Descubrí la unión entre la creatividad y la tradición en mis creaciones. 
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition opacity-0 animate-fadeIn animation-delay-500"
            >
              Ordena ahora.
            </a>
          </div>
          
          {/* Carousel - full width on mobile */}
          <div className="w-full md:w-1/2 opacity-0 animate-fadeIn animation-delay-700">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;