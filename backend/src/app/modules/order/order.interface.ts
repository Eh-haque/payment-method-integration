import { Document, Types } from "mongoose";

export interface IOrder extends Document {
  user: Types.ObjectId; // Reference to the User model
  products: {
    product: Types.ObjectId; // Reference to the Product model
    quantity: number;
  }[];
  totalAmount: number;
  paymentStatus: "Pending" | "Paid" | "Failed";
  transactionId?: string; // SSL Commerz Transaction ID
  createdAt: Date;
  updatedAt: Date;
}
