import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderService } from "./order.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrder(res, req);

  // sendResponse(res, {
  //   statusCode: httpStatus.CREATED,
  //   message: "Order placed successfully",
  //   data: order,
  // });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(
    res,
    req.query.sp_trxn_id as string
  );

  // sendResponse(res, {
  //   statusCode: httpStatus.CREATED,
  //   message: "Order placed successfully",
  //   data: order,
  // });
});

export const orderController = { createOrder, verifyPayment };
