import { Router } from "express";
import { orderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../user/user.constants";

const orderRouter = Router();

orderRouter
  .route("/")
  .post(auth(UserRole.user), orderController.createOrder)
  .get(auth(UserRole.user), orderController.verifyPayment);

export default orderRouter;
