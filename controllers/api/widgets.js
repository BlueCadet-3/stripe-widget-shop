const Widget = require('../../models/widget');

module.exports = {
    getAll,
};

function getAll(req, res) {
    const widgets = Widget.find({});
    console.log(widgets);
    // res.json(widgets);
}