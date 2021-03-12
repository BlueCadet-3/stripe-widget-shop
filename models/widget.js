const mongoose = require('mongoose');

require('./category');
const widgetSchema = require('./widgetSchema.js')

module.exports = mongoose.model('Widget', widgetSchema);