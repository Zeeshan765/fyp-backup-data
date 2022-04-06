// Here we can do all crud operations of the User
const express = require('express');
const router = express.Router();
let { User } = require('../models/User');
var bcrypt = require('bcryptjs');
const authorization = require('../middleware/authorization');
const admin = require('../middleware/admin');

//Edit Or Update the user Profile
router.put('/update', authorization, async (req, res) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  try {
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
    });

    // await user.save();
    //let updatedToken = user.generateToken();
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json('User Does Not  Exsist');
  }
});

//update user password
router.put('/update/password', authorization, async (req, res) => {
  let user = await User.findById(req.user.id).select('+password');
  if (!user) return res.status(400).json('wrong user');
  let isPasswordMatched = await bcrypt.compare(
    req.body.oldpassword,
    user.password
  );
  if (isPasswordMatched) {
    let salt = await bcrypt.genSalt(10);
    let newPassword = await bcrypt.hash(req.body.newPassword, salt);
    await User.findByIdAndUpdate(req.user.id, { password: newPassword });

    return res.status(200).json('Password Update Successfully');
  } else {
    return res.status(400).json('Password is Incorrect');
  }

  // const user = await User.findById(req.user.id).select('+password');

  // if (req.body.newPassword !== req.body.confirmPassword) {
  //   return res.status(400).json('Password Doesnot Match');
  // }

  // user.password = req.body.newPassword;

  // await user.save();

  // // sendToken(user, 200, res);
  // let updatedToken = user.generateToken();
  // console.log(updatedToken);
  // return res.status(200).json(updatedToken);
});

//get single user
router.get('/find', authorization, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    // const { password, ...info } = user._doc;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All the user ------>Admin
router.get('/all', authorization, admin, async (req, res) => {
  const query = req.query.new;

  try {
    let user = query
      ? await User.find().sort({ _id: -1 }).limit(2)
      : await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(402).json(error);
  }
});

//Delete the user ------->Admin
router.delete('/:id', authorization, admin, async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json('User Deleted Succesffuly');
  } catch (error) {
    return res.status(401).json(error);
  }
});

//GET USER STATS------->Admin

router.get('/stats', authorization, admin, async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// if (req.user.id === req.params.id);
//if(req.body.password){

//}
