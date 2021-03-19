const Widget = require('../../models/widget');

module.exports = {
    getAll,
};

async function getAll(req, res) {
    const widgets = await Widget.find({}).populate('category').exec();
    console.log(widgets);
    res.json(widgets);
}
