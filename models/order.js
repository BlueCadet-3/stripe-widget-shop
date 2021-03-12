const mongoose = required('mongoose');
const Schema = mongoose.Schema;
const widgetSchema = required('./widgetSchema.js');

const lineWidgetSchema = new Schema({
    widget: widgetSchema,
    quantity: {type: Number, default: 1},
},{
    timestamps:true,
    toJSON: {virtuals: true}
});

lineWidgetSchema.virtual('extPrice').get(function() {
    return this.quantity * this.widget.price
});

const orderSchema = new Schema({
    user: {type: Schema.type.ObjectId, ref:'User'},
    lineWidgets: [lineWidgetSchema],
    isPaid: {type: Boolean, default:false},
}, {
    timestamps:true,
    toJSON: {virtuals: true},
});

orderSchema.virtual('orderDate').get(function() {
    return this.createdAt.toLocaleDateString();
});

orderSchema.virtual('totalQty').get(function() {
    return this.lineWidgets.reduce((total, widgets) => total + widget.quantity, 0);
});

orderSchema.virtual('totalPrice').get(function() {
    return this.lineWidgets.reduce((total, widgets) => total + widget.extPrice, 0);
});

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getUserOrders = async function(userId)  {
    return this.find({ user: userId, isPaid: true}).sort('-updatedAt');
};

orderSchema.methods.addWidgetToCard = async function(widgetId) {
    const cart = this;
    const lineWidget = cart.lineWidgets.find(lineWidget => lineWidget.widget._id.equal(widgetId));
    if(lineWidget) {
        lineWidget.quantity += 1;
    } else {
        const widget = await mongoose.model('Widget').findById(widgetId);
        cart.lineWidgets.push({ widget });
    }
    return cart.save();
}

orderSchema.methods.setWidgetQuantity = async function(widgetId, newQuantity) {
    const cart = this;
    const lineWidget = cart.lineWidgets.find(lineWidget => lineWidget.widget._id.equals(widgetId));
    if (lineWidget && newQuantity <= 0) {
        lineWidget.remove();
    } else if (lineWidget) {
        lineWidget.quantity = newQuantity;
    }
}

module.exports = mongoose.model('Order', orderSchema);