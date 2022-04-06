const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cloudinary = require('../utilis/cloudinary');
const multer = require('multer');
const Product = require('../models/product');
//const DIR = './public/';
const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, './public');
  // },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, mongoose.Types.ObjectId() + '-' + fileName);
    //cb(null, file.originalname);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

//getall the product
router.get('/', async (req, res) => {
  let products = await Product.find();
  return res.json(products);
});

router.get('/:category', async (req, res) => {
  const category = req.params.category;
  console.log(category);
  let products = await Product.find({ category: { $eq: category } });
  return res.json(products);
});

//get single product
router.get('/find/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    let product = await Product.findById(id);
    if (!product)
      return res.status(400).send('Product With given ID is not present');
    return res.json(product);
  } catch (err) {
    return res.status(400).send('Invalid ID'); // format of id is not correct
  }
});

//Insert a Product

router.post('/', upload.single('image'), async (req, res) => {
  // Upload image to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path);
  //res.json(result);
  console.log(result);
  console.log(req.body);
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.info1 = req.body.info1;
  product.info2 = req.body.info2;
  product.info3 = req.body.info3;
  product.info4 = req.body.info4;
  product.description = req.body.description;
  product.company = req.body.company;
  product.category = req.body.category;
  product.picture = result.secure_url;
  product.cloudinary_id = result.public_id;
  await product.save();
  return res.json(product);
});

//Delete a Product

router.delete('/:id', async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  // Delete image from cloudinary
  await cloudinary.uploader.destroy(product.cloudinary_id);
  return res.json(product);
});
//upload.single('image'),
//Update a Product
// router.put('/:id',  async (req, res) => {
//   try {

//     // const result = await cloudinary.uploader.upload(req.file.path);
//     // console.log(result);
//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,

//       },

//       { new: true }
//     );
//     console.log(product);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
//let product = await Product.findByIdAndUpdate(req.params.id);

// await cloudinary.uploader.destroy(product.cloudinary_id);
// const result = await cloudinary.uploader.upload(req.file.path);
// //res.json(result);
// product.name = req.body.name;
// product.price = req.body.price;
// product.description = req.body.description;
// product.company = req.body.company;
// product.info1 = req.body.info1;
// product.info2 = req.body.info2;
// product.info3 = req.body.info3;
// product.info4 = req.body.info4;
// product.category = req.body.category;
// product.picture = result.secure_url;
// product.cloudinary_id = result.public_id;
// await product.save();
// return res.json(product);

// router.patch('/:id', upload.single('image'), async (req, res) => {
//   //const result = await cloudinary.uploader.upload(req.file.path);

//     const newUserData = {
//       name : req.body.name,
//         price : req.body.price,
//        description : req.body.description,
//         company : req.body.company,
//         info1 : req.body.info1,
//         info2 : req.body.info2,
//         info3 : req.body.info3,
//         info4 : req.body.info4,
//         category : req.body.category,
//         // picture : result.secure_url,
//         // cloudinary_id : result.public_id,
//     };

//   try {
//     const user = await Product.findByIdAndUpdate(req.params.id, newUserData, {
//       new: true,
//     });

//     // await user.save();
//     //let updatedToken = user.generateToken();
//     console.log(user);
//     return res.status(200).json(user);
//   } catch (error) {
//     console.log()
//     return res.status(500).json('User Does Not  Exsist');
//   }

//   });

router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    const data = {
      name: req.body.name || product.name,
      price: req.body.price || product.price,
      info1: req.body.info1 || product.info1,
      info2: req.body.info2 || product.info2,
      info3: req.body.info3 || product.info3,
      info4: req.body.info4 || product.info4,
      description: req.body.description || product.description,
      company: req.body.company || product.company,
      category: req.body.category || product.category,
      
      
      picture: result?.secure_url || product.picture,
      cloudinary_id: result?.public_id || product.cloudinary_id,
    };
    product = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

// if(req.file){
//   const updatedata= {
//     name : req.body.name,
//   price : req.body.price,
//  description : req.body.description,
//   company : req.body.company,
//   info1 : req.body.info1,
//   info2 : req.body.info2,
//   info3 : req.body.info3,
//   info4 : req.body.info4,
//   category : req.body.category,
//   picture : result.secure_url,
//   cloudinary_id : result.public_id,
//   }
// product.name = req.body.name;
//   product.price = req.body.price;
//   product.info1 = req.body.info1;
//   product.info2 = req.body.info2;
//   product.info3 = req.body.info3;
//   product.info4 = req.body.info4;
//   product.description = req.body.description;
//   product.company = req.body.company;
//   product.category = req.body.category;
//   product.picture = result.secure_url;
//   product.cloudinary_id = result.public_id;

// }else{
//   let updatedata= {
//     name : req.body.name,
//   price : req.body.price,
//  description : req.body.description,
//   company : req.body.company,
//   info1 : req.body.info1,
//   info2 : req.body.info2,
//   info3 : req.body.info3,
//   info4 : req.body.info4,
//   category : req.body.category,

//   }

// }
// let product = await Product.findByIdAndUpdate(req.params.id, updatedata,
//   {
//   new: true,
// });

// // await user.save();
// //let updatedToken = user.generateToken();
// console.log(req.body);
// return res.status(200).json(product);
// try {
//   let product = await Product.findByIdAndUpdate(req.params.id, updatedata,
//     {
//     new: true,
//   });

//   // await user.save();
//   //let updatedToken = user.generateToken();
//   console.log(req.body);
//   return res.status(200).json(product);
// } catch (error) {
//   return res.status(500).json('Product Cant be updated');
// }

/*router.put('/:id', async (req, res) => {
  let product = await Product.findByIdAndUpdate(req.params.id, req.body);

  return res.send(product);
});*/
module.exports = router;
