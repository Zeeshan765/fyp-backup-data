const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
  {
    user: { type: String, ref: 'User', required: true },
    // userId: { type: String, required: true },
    items: [
      {
        product: {
          type: String,
          ref: 'Component',
          //ref: 'Product',
        },
        // type: { type: String, enum: ['PRODUCT', 'COMPONENT'] },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

module.exports = Cart;
