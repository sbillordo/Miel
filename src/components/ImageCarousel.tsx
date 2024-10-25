import React, { useState, useEffect } from 'react';

interface CarouselImage {
  url: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Assorted pastries"
  },
  {
    url: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Chocolate cupcake"
  },
  {
    url: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Vanilla cupcake"
  },
  {
    url: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Red velvet cupcake"
  }
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-0">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="absolute w-full h-full flex items-center justify-center">
          {images.map((image, index) => {
            let position = index - currentIndex;
            if (position < 0) position += images.length;
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out 
                  w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80
                  ${position === 0 ? 'z-20 scale-100 opacity-100' : 
                    position === 1 ? 'z-10 scale-75 opacity-60 translate-x-[60%] sm:translate-x-[75%]' :
                    position === images.length - 1 ? 'z-10 scale-75 opacity-60 -translate-x-[60%] sm:-translate-x-[75%]' :
                    'scale-50 opacity-0'}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        disabled={isAnimating}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        disabled={isAnimating}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${currentIndex === index ? 'bg-rose-500 w-4' : 'bg-rose-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;