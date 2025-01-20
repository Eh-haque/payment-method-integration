import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>(
  {},
  {
    timestamps: true,
  }
);

const Order = model<IOrder>("Order", OrderSchema);

export default Order;
