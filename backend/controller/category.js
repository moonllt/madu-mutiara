const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// POST /categories - Membuat kategori baru
router.post('/categories', async (req, res) => {
  try {
    const { name, description } = req.body;

    // Periksa apakah kategori dengan nama yang sama sudah ada
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({ error: 'Kategori dengan nama tersebut sudah ada' });
    }

    // Buat kategori baru
    const category = new Category({ name, description });
    await category.save();

    res.status(201).json({ message: 'Kategori berhasil ditambahkan', category });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

module.exports = router;
