import React from 'react';
import { ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center space-x-2 py-4 container mx-auto">
      <ChefHat className="h-6 w-6 text-rose-400" />
      <span className="text-xl font-serif font-semibold text-rose-900">Miel</span>
    </header>
  );
};

export default Header;
