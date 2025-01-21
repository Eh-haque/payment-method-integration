import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { IUser } from "../user/user.interface";
import Order from "./order.model";
import { orderUtils } from "./order.utils";
import Product from "../product/product.model";
import { IProduct } from "../product/product.interface";

const createOrder = async (
  client_ip: string,
  user: IUser,
  res: Response,
  req: Request
) => {
  console.log(req.body, client_ip);

  const products = req.body.products;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item: { product: string; quantity: number }) => {
      const product = await Product.findById(item.product);
      if (product) {
        const subtotal = product ? (product.price || 0) * item.quantity : 0;
        totalPrice += subtotal;
        return item;
      }
    })
  );

  const order_id = orderUtils.generateTransactionId();
  const order = await Order.create({
    user,
    products: productDetails,
    totalPrice,
    transactionId: order_id,
  });

  const paymentDetails = {
    amount: totalPrice,
    order_id,
    currency: "BDT",
    customer_name: user.name,
    customer_address: user.address,
    customer_phone: user.phone,
    customer_city: user.city,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(paymentDetails);

  return { order, payment };
};

const verifyPayment = async (sp_trxn_id: string) => {
  const payment = await orderUtils.verifyPayment(sp_trxn_id);
  return payment;
};

export const orderService = {
  createOrder,
  verifyPayment,
};
