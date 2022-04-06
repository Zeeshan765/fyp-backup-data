const Cart = require('../models/Cart');
const User = require('../models/User');
const express = require('express');
const mongoose = require('mongoose');
const authorization = require('../middleware/authorization');
let router = express.Router();

//CREATE

router.post('/', authorization, async (req, res) => {
  console.log(req.body);

  let cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    //if cart already exist then update it by adding other product
    //if (req.body.type === 'PRODUCT') {
    //&& item.type === req.body.type
    //Checking if Item already in Cart
    for (item of cart.items) {
      if (item.product === req.body.product) {
        return res.status(400).send('Product already in cart');
      }
    }
    //Add new product in the cart
    cart.items.push({
      product: req.body.product,
      // type: req.body.type,
      quantity: req.body.quantity,
    });
    console.log('cart :', cart);
    await cart.save();
    return res.send(cart);
    //res.status(200).json({ message: cart });
    // Cart.findByIdAndUpdate(cart._id, { items: cart.items });
    // return res.status(200).json(cart);
  } else {
    //if cart not exist than create the new one
    cart = new Cart({
      user: req.user._id,
      items: [
        {
          product: req.body.product,
          //type: req.body.type,
          quantity: req.body.quantity,
        },
      ],
      // cart.items.push({
      //   productId: req.body.product,
      //   quantity: req.body.quantity,
      // }),
    });
    console.log(cart.user);
    console.log('cart :', cart);
    await cart.save();
    return res.send(cart);
    // }
  }
});

//  cart = new Cart({
//   user: req.user._id,
//   items: [{ product: req.body.product, quantity: req.body.quantity }],
//   // cart.items.push({
//   //   productId: req.body.product,
//   //   quantity: req.body.quantity,
//   // }),
// });

// console.log(cart.user);
//cart.productId = req.body.productId;
//cart.quantity = req.body.quantity;
// let id = req.body.productId;
// let value = req.body.quantity;
// console.log('id', id);
// console.log('quantity', value);
// //cart.items.push({ id, value });
// cart.items.push({
//   productId: req.body.productId,
//   quantity: req.body.quantity,
// });
// console.log('cart :', cart);
// await cart.save();
// return res.send(cart);
// });

//DELETE cart/Clear Cart
router.delete('/', authorization, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.status(200).json('Cart has been deleted...');
  } catch (err) {
    console.log(error);
    res.status(500).json('Internal Server Error');
  }
});

//Get User Cart

router.get('/', authorization, async (req, res) => {
  //console.log(req.body);

  let cart = await Cart.findOne({ user: req.user._id })
    .populate('items.product', 'name picture price')
    .lean();
  if (cart) {
    //console.log(cart.items[0].quantity);
    if (cart.items.length === 0) {
      return res.status(200).json('Cart is Empty');
    }
  } else {
    res.status(200).json('Cart is Empty');
  }
  var Total = 0;
  for (index = 0; index < cart.items.length; index++) {
    // console.log('loop');
    // if (
    //   cart.items[index].type === 'PRODUCT' //||//      cart.items[index].type === 'COMPONENT'
    // ) {
    //   console.log('obj');
    cart.items[index].totalPrice =
      cart.items[index].product.price * cart.items[index].quantity;
    console.log(cart.items[index].totalPrice);
    Total += cart.items[index].totalPrice;
  }
  cart.Total = Total;
  console.log(Total);
  return res.status(200).json(cart);
});

//Delete Particular Item from the cart

router.patch('/deleteItem/:id', authorization, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (cart) {
      //This remove cart from database
      if (cart.items.length <= 1) {
        await Cart.findOneAndDelete({ _id: cart._id });
        return res.send('Item Deleted');
      }
      for (i = 0; i < cart.items.length; i++) {
        //console.log(cart.items[i]._id.toString());
        if (cart.items[i]._id.toString() === req.params.id) {
          cart.items.splice(i, 1);
          await Cart.findOneAndUpdate({ _id: cart._id }, { items: cart.items });
          return res.send('Item Deleted Successfully');
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

//UPDATE Increment
router.patch('/increment/:id', authorization, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id })
      .populate('items.product')
      .lean();
    if (cart) {
      for (item of cart.items) {
        if (item._id.toString() === req.params.id) {
          console.log('1');
          item.quantity = item.quantity + 1;
          await Cart.findOneAndUpdate(
            { _id: cart._id, 'items._id': item._id },
            { 'items.$.quantity': item.quantity }
          );
          return res.send('Item Decreased');
        } else {
          return res.status(400).send('Item Not  Decreased');
        }
      }

      return res.status(400).send('Unable to perform Operation');
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

//router.patch('/increment/:id', authorization, async (req, res) => {

//Update Cart Item Decrement

router.patch('/decrement/:id', authorization, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id })
      .populate('items.product')
      .lean();
    if (cart) {
      for (item of cart.items) {
        if (item._id.toString() === req.params.id) {
          console.log('1');
          item.quantity = item.quantity - 1;
          await Cart.findOneAndUpdate(
            { _id: cart._id, 'items._id': item._id },
            { 'items.$.quantity': item.quantity }
          );
          return res.send('Item Decreased');
        } else {
          return res.status(400).send('Item Not  Decreased');
        }
      }

      return res.status(400).send('Unable to perform Operation');
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET USER CART
// router.get('/find/:userId', async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL

router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
