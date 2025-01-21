import { IUser } from "../user/user.interface";
import Order from "./order.model";
import Product from "../product/product.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";

const createOrder = async (
  client_ip: string,
  user: IUser,
  payload: { products: { product: string; quantity: number }[] }
) => {
  if (!payload.products.length)
    throw new AppError(httpStatus.NOT_ACCEPTABLE, "Order is not specified");

  const products = payload.products;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item) => {
      const product = await Product.findById(item.product);
      if (product) {
        const subtotal = product ? (product.price || 0) * item.quantity : 0;
        totalPrice += subtotal;
        return item;
      }
    })
  );

  let order = await Order.create({
    user,
    products: productDetails,
    totalPrice,
  });

  return { order };
};

const verifyPayment = async (sp_trxn_id: string) => {};

export const orderService = {
  createOrder,
  verifyPayment,
};
