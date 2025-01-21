import { Document, Types } from "mongoose";

export interface IOrder extends Document {
  user: Types.ObjectId;
  products: {
    product: Types.ObjectId;
    quantity: number;
  }[];
  totalPrice: number;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
  transaction?: {
    id: string;
    code: number;
    message: string;
    status: string;
    method: string;
    bank_status: string;
    date_time: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
