import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderNo: {
      type: String,
      required: true,
      unique: true,
    },

    customer: {
      name: {
        type: String,
        required: true,
      },
      email: String,
      phone: String,
      address: String,
    },

    items: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        size: String,
        qty: {
          type: Number,
          required: true,
        },
        unit: {
          type: Number,
          required: true,
        },
        lineTotal: {
          type: Number,
          required: true,
        },
      },
    ],

    deliveryCharge: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "awaiting_payment_link",
    },

    sent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
