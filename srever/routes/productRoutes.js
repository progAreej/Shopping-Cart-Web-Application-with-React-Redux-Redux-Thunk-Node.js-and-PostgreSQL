const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/productController');
const { protect, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);  // Get all products
router.post('/', protect, isAdmin, addProduct);  // Add a product (admin only)
router.delete('/:id', protect, isAdmin, deleteProduct);  // Delete a product (admin only)

module.exports = router;
