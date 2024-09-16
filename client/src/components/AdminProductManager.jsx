import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../actions/productActions';

const AdminProductManager = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [newProduct, setNewProduct] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    dispatch(addProduct({ name: newProduct }));
    setNewProduct('');
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Product Manager</h2>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Product Name"
        className="p-2 border mb-4 w-full"
      />
      <button onClick={handleAddProduct} className="bg-green-500 text-white p-2 rounded">Add Product</button>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product._id} className="flex justify-between items-center border-b py-2">
            {product.name}
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductManager;
