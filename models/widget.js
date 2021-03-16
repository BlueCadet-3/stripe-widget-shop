const mongoose = require('mongoose');

require('./category');
const widgetSchema = require('./widgetSchema')

module.exports = mongoose.model('Widget', widgetSchema);