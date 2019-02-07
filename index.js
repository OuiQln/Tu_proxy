
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  url: String,
  qty: Number,
  keywords: String,
});

let product = mongoose.model('product', repoSchema);

module.exports = product;


// var newProduct = new Schema({ 
//   id: Number,
//   name: String,
//   price: Number,
//   url: String,
//   qty: Number,
//   type: String,
// });

  // assign a function to the "methods" object of our animalSchema
  // newProduct.findSimilarTypes = function(cb) {
  //   return this.model('Animal').find({ type: this.type }, cb);
  // };