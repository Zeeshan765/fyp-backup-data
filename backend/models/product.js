const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    info1: {
      type: String,
    },
    info2: {
      type: String,
    },
    info3: {
      type: String,
    },
    info4: {
      type: String,
    },
    company: {
      type: String,
    },
    category: {
      type: String,
    },
    picture: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
