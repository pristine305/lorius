import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/orders", async (req, res) => {
  try {
    const {
      orderNo,
      customer,
      items,
      deliveryCharge,
      total,
      status,
      sent,
    } = req.body;

    // Basic validation
    if (!orderNo) {
      return res.status(400).json({
        success: false,
        message: "orderNo is required",
      });
    }

    if (!customer) {
      return res.status(400).json({
        success: false,
        message: "customer is required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one item is required",
      });
    }

    // Check if order already exists
    const existingOrder = await Order.findOne({ orderNo });

    if (existingOrder) {
      return res.status(409).json({
        success: false,
        message: "Order already exists",
        order: existingOrder,
      });
    }

    // Create order
    const order = await Order.create({
      orderNo,
      customer,
      items,
      deliveryCharge: deliveryCharge || 0,
      total,
      status: status || "awaiting_payment_link",
      sent: sent || false,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
});

export default router;
