import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
      <footer className="bg-rose-900 text-rose-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-serif font-semibold">Miel</span>
          </div>
          <p className="text-rose-200">© {new Date().getFullYear()} Miel. Todos los derechos reservados.</p>
        </div>
      </footer>
  );
};

export default Footer;
