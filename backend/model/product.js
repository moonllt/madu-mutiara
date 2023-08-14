const mongoose = require("mongoose");

// const productOptionSchema = new mongoose.Schema({
//   weight: {
//     type: Number,
//     required: [true, "Input berat!"],
//   },
//   price: {
//     type: Number,
//     required: [true, "Input harga!"],
//   },
//   stock: {
//     type: Number,
//     required: [true, "Input stok!"],
//   },
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mohon masukkan nama produk!"],
  },
  description: {
    type: String,
    required: [true, "Mohon berikan deskripsi produk!"],
  },
  category: {
    type: String,
    required: [true, "Mohon pilih kategori produk!"],
  },
  tags: {
    type: String,
  },
  price: {
    type: Number
  },
  size: {
    type: Number
  },
  stock: {
    type: Number,
    required: [true, "Input stok produk!"],
  },
  // options: [productOptionSchema], // Menyimpan pilihan berat, harga, dan stok dalam array
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt:{
        type: Date,
        default: Date.now(),
      }
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
