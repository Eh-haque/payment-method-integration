import Shurjopay from "shurjopay";
import config from "../../config";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";

const shurjopay = new Shurjopay();

// console.log({ shurjopay });

shurjopay.config(
  config.sp.endpoint!,
  config.sp.username!,
  config.sp.password!,
  config.sp.prefix!,
  config.sp.return_url!
);

const createOrder = async (res: Response, req: Request) => {
  const { amount, order_id, customer_name, customer_phone } = req.body;

  const paymentData = await shurjopay.makePayment(
    {
      amount: 1000,
      order_id: "order123",
      currency: "BDT",
      customer_name: "John Doe",
      customer_address: "Dhaka",
      customer_phone: "01712345678",
      customer_city: "Dhaka",
      client_ip: req.ip,

      customer_email: "sdklfj@saldkf.sdf",
    },
    (response) => {
      sendResponse(res, {
        statusCode: 201,
        message: "Order placed successfully",
        data: response,
      });
    },
    (error) => {
      sendResponse(res, {
        statusCode: 400,
        message: error.message,
        data: error,
      });
    }
  );
  return { paymentData };
};

const verifyPayment = async (res: Response, sp_trxn_id: string) => {
  shurjopay.verifyPayment(
    sp_trxn_id,
    (response) => {
      sendResponse(res, {
        statusCode: 201,
        message: "Order placed successfully",
        data: response,
      });
    },
    (error) => {
      sendResponse(res, {
        statusCode: 400,
        message: error.message,
        data: error,
      });
    }
  );
};

export const orderService = {
  createOrder,
  verifyPayment,
};
