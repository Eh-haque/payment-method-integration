import { Router } from "express";
import userRouter from "../modules/user/user.router";
import productRouter from "../modules/product/product.router";

const router = Router();

router.use("/user", userRouter);
router.use("/product", productRouter);

export default router;
