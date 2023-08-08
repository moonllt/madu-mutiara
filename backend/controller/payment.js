const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const axios = require("axios");
const midtransClient = require('midtrans-client');


// Function untuk menghasilkan timestamp saat ini
const getCurrentTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

// Endpoint untuk membuat transaksi baru menggunakan Midtrans Snap
router.post("/process-transaction", catchAsyncErrors(async (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-vVY_WxeBP95ZvDEzg-vrGruo",
      clientKey: "SB-Mid-client-3nHMokxoZpEqoHor"
    });

    const parameter = {
      transaction_details: {
        order_id: "order-csb-" + getCurrentTimestamp(),
        gross_amount: req.body.totalPrice
      },
      customer_details: {
        first_name: req.body.name
      },
      enabled_payments: ["bank_transfer", "gopay", "shopeepay"]
    };

    snap.createTransaction(parameter).then((transaction) => {
      const dataPayment = {
        response: JSON.stringify(transaction)
      };
      const token = transaction.token;

      res.status(200).json({ message: "Berhasil", dataPayment, token: token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}));

module.exports = router;





