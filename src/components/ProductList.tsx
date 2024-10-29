import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductList: React.FC = () => {
  const sizes = [
    { label: 'Pequeño', price: 10 },
    { label: 'Mediano', price: 20 },
    { label: 'Grande', price: 30 }
  ];

  const flavors = [
    { label: 'Chocolate', extraCost: 5 },
    { label: 'Vainilla', extraCost: 3 },
    { label: 'Red Velvet', extraCost: 7 },
    { label: 'Limón', extraCost: 4 }
  ];

  const products = [
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
  ];

  return (
    <div className="min-h-screen bg-rose-50">


      {/* Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-serif font-bold text-rose-900 mb-8 text-center">Lista de Productos</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} sizes={sizes} flavors={flavors} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Componente para cada elemento del producto
const ProductItem: React.FC<{ product: any, sizes: any, flavors: any }> = ({ product, sizes, flavors }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0].label);
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0].label);
  const [price, setPrice] = useState(sizes[0].price + flavors[0].extraCost);

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);

    const sizeInfo = sizes.find(size => size.label === newSize);
    const flavorInfo = flavors.find(flavor => flavor.label === selectedFlavor);
    if (sizeInfo && flavorInfo) {
      setPrice(sizeInfo.price + flavorInfo.extraCost);
    }
  };

  const handleFlavorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFlavor = event.target.value;
    setSelectedFlavor(newFlavor);

    const sizeInfo = sizes.find(size => size.label === selectedSize);
    const flavorInfo = flavors.find(flavor => flavor.label === newFlavor);
    if (sizeInfo && flavorInfo) {
      setPrice(sizeInfo.price + flavorInfo.extraCost);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-rose-900 mb-2">{product.name}</h3>
        <p className="text-rose-700 mb-4">{product.description}</p>

        <div className="mb-4">
          <label htmlFor={`size-${product.name}`} className="block text-sm font-medium text-rose-900 mb-1">
            Tamaño:
          </label>
          <select
            id={`size-${product.name}`}
            value={selectedSize}
            onChange={handleSizeChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            {sizes.map((size, index) => (
              <option key={index} value={size.label}>{size.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor={`flavor-${product.name}`} className="block text-sm font-medium text-rose-900 mb-1">
            Sabor del Bizcocho:
          </label>
          <select
            id={`flavor-${product.name}`}
            value={selectedFlavor}
            onChange={handleFlavorChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            {flavors.map((flavor, index) => (
              <option key={index} value={flavor.label}>{flavor.label}</option>
            ))}
          </select>
        </div>

        <div className="text-rose-900 font-bold text-lg mt-4">
          Precio: ${price}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
