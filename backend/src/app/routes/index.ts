import { Router } from "express";
import userRouter from "../modules/user/user.router";
import productRouter from "../modules/product/product.router";
import orderRouter from "../modules/order/order.router";

const router = Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);

export default router;
