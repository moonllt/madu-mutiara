const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: {
    type: String,
    default: function() {
      return "ORDER-" + Math.floor(Math.random() * 1000000);
    },
        unique: true,
    },
    cart:{
        type: Array,
        required: true,
    },
    shippingAddress:{
        type: Object,
        required: true,
    },
    user:{
        type: Object,
        required: true,
    },
    totalPrice:{
        type: Number,
        required: true,
    },
    shipping:{
        type: Number,
        required: true,
    },
    discountPrice:{
        type: Number,
        required: false,
    },
    subTotalPrice:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        default: "Processing",
    },
    paymentInfo:{
        id:{ 
            type: String,
        },
        status: {
            type: String,
        },
        type:{
            type: String,
        },
    },
    paidAt:{
        type: Date,
        default: Date.now(),
    },
    resi: {
        type: String,
        default: ""
    },
    deliveredAt: {
        type: Date,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
   
});

module.exports = mongoose.model("Order", orderSchema);