const Widget = require('../../models/widget');

module.exports = {
    getAll,
};

async function getAll(req, res) {
    const widgets = await Widget.find({}).sort('price').populate('category').exec();
    res.json(widgets);
}