const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const widgetSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required:true, default: 0},
  imageUrl: String,
  description: String,
  category: {type:Schema.Types.ObjectId, ref: 'Category'},
}, {
  timestamps: true
});

module.exports = widgetSchema;