// src/productListMain.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);
