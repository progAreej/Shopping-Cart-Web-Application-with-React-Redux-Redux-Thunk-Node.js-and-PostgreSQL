// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Home

import ProductList from './components/ProductList';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
// import ProductDetails from './pages/ProductDetails';  // Example for a product details page

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/products/:id" element={<ProductDetails />} />  Example route for product details */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
