const mongoose = require('mongoose');
const componentSchema = new mongoose.Schema(
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
    category: {
      type: String,
    },
    socket: {
      type: String,
    },
    ramSupport: {
      type: String,
    },
    size: {
      type: String,
    },
    watt: {
      type: String,
    },
    company: {
      type: String,
    },
    info1:{
      type:String,
    },
    info2:{
      type:String,
    },
    info3:{
      type:String,
    },
    info4:{
      type:String,
    },
  site:{
    type: String,
  },
  coolingsockets:{
    type: Object,
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

const Component =
  mongoose.models.Component || mongoose.model('Component', componentSchema);

module.exports = Component;
