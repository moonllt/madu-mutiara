const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const Order = require("../model/order");
const Shop = require("../model/shop");
const Product = require("../model/product");

// create new order
router.post(
  "/create-order",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { cart, shippingAddress, user, totalPrice, shipping, discountPrice, subTotalPrice, paymentInfo } = req.body;

      //   group cart items by shopId
      const shopItemsMap = new Map();

      for (const item of cart) {
        const shopId = item.shopId;
        if (!shopItemsMap.has(shopId)) {
          shopItemsMap.set(shopId, []);
        }
        shopItemsMap.get(shopId).push(item);
      }

      // create an order for each shop
      const orders = [];

      for (const [shopId, items] of shopItemsMap) {
        const order = await Order.create({
          cart: items,
          shippingAddress,
          user,
          totalPrice,
          shipping,
          discountPrice,
          subTotalPrice,
          paymentInfo,
        });
        orders.push(order);
      }

      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get all orders of user
router.get(
  "/get-all-orders/:userId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({ "user._id": req.params.userId }).sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get all orders of seller
router.get(
  "/get-seller-all-orders/:shopId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({
        "cart.shopId": req.params.shopId,
      }).sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update order status for seller
router.put(
  "/update-order-status/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return next(new ErrorHandler("Order not found with this id", 400));
      }

      // Check if the status is "Transferred to delivery partner"
      if (req.body.status === "Transferred to delivery partner") {
        for (const o of order.cart) {
          await updateOrder(o._id, o.qty);
        }
      }

      order.status = req.body.status;

      if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
        order.paymentInfo.status = "Succeeded";
        await updateOrderForDelivered(order.cart); // Update the stock for delivered products
        await updateSellerInfo(order.totalPrice);
      }

      await order.save({ validateBeforeSave: false });

      res.status(200).json({
        success: true,
        order,
      });

      async function updateOrder(id, qty) {
        const product = await Product.findById(id);

        product.stock -= qty;
        product.sold_out += qty;

        await product.save({ validateBeforeSave: false });
      }

      async function updateOrderForDelivered(cartItems) {
        for (const item of cartItems) {
          const product = await Product.findById(item._id);

          // Adjust stock and sold_out values accordingly for delivered products
          product.stock -= item.qty;
          product.sold_out += item.qty;

          await product.save({ validateBeforeSave: false });
        }
      }

      async function updateSellerInfo(amount) {
        const seller = await Shop.findById(req.seller.id);

        const currentBalance = seller.availableBalance || 0;
        const updatedBalance = currentBalance + amount;

        seller.availableBalance = updatedBalance;

        await seller.save();
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// accept the refund ---- seller
router.put(
  "/order-refund-success/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);

      if (!order) {
        return next(new ErrorHandler("Order not found with this id", 400));
      }

      order.status = req.body.status;

      await order.save();

      res.status(200).json({
        success: true,
        message: "Order Refund successfull!",
      });

      if (req.body.status === "Refund Success") {
        order.cart.forEach(async (o) => {
          await updateOrder(o._id, o.qty);
        });
      }

      async function updateOrder(id, qty) {
        const product = await Product.findById(id);

        product.stock += qty;
        product.sold_out -= qty;

        await product.save({ validateBeforeSave: false });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);



// all orders --- for admin
router.get(
  "/admin-all-orders",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find().sort({
        deliveredAt: -1,
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Create new endpoint to submit resi
router.post("/submit-resi/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nomorResi } = req.body;

    // Find the order by id
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Save the resi to the order
    order.resi = nomorResi;
    await order.save();

    res.status(200).json({ message: "Resi successfully submitted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit resi" });
  }
});

// Create new endpoint to get resi for buyer
router.get("/get-resi/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the order by id
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Get the resi from the order and send it to the client
    const resi = order.resi;
    res.status(200).json({ resi });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch resi" });
  }
});

module.exports = router;
