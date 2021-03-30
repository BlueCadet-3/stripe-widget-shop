require('dotenv').config();
require('./config/database');

const Widget = require('./models/widget');
const Category = require('./models/category');
const order = require('./models/order');
// const category = require('./models/category');

(async function() {

    await 
    await Category.deleteMany({});
    const categories = await Category.create([
        {
            name: 'Blue',
        }, 
        {
            name: 'Red',
        },
        {
            name: 'Green'
        },
    ]);



    await Widget.deleteMany({});
    const widgets = await Widget.create([
        {
            name: "Small Blue Widget",
            price: 10,
            imageUrl: 'noUrlYet',
            description: 'A fancy small blue widget',
            category: categories[0],
        },
        {
            name: "Medium Blue Widget",
            price: 20,
            imageUrl: 'noUrlYet',
            description: 'A fancy small blue widget',
            category: categories[0],
        },
        {
            name: "Large Blue Widget",
            price: 30,
            imageUrl: 'noUrlYet',
            description: 'A fancy small blue widget',
            category: categories[0],
        },
        {
            name: "Small Red Widget",
            price: 10,
            imageUrl: 'noUrlYet',
            description: 'A fancy small red widget',
            category: categories[1],
        },
        {
            name: "Medium Red Widget",
            price: 20,
            imageUrl: 'noUrlYet',
            description: 'A fancy medium red widget',
            category: categories[1],
        },
        {
            name: "Large Red Widget",
            price: 30,
            imageUrl: 'noUrlYet',
            description: 'A fancy large red widget',
            category: categories[1],
        },
        {
            name: "Small Green Widget",
            price: 10,
            imageUrl: 'noUrlYet',
            description: 'A fancy small green widget',
            category: categories[2],
        },
        {
            name: "Medium Green Widget",
            price: 20,
            imageUrl: 'noUrlYet',
            description: 'A fancy medium green widget',
            category: categories[2],
        },
        {
            name: "Large Green Widget",
            price: 30,
            imageUrl: 'noUrlYet',
            description: 'A fancy large green widget',
            category: categories[2],
        },
    ]);

    console.log(widgets);

    process.exit();

})();