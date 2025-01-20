import { Request, Response } from "express";
import httpStatus from "http-status";
import { productService } from "./product.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

export const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const newProduct = await productService.createProduct(productData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Product created successfully",
    data: newProduct,
  });
});

export const getAllProducts = catchAsync(
  async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "Products retrieved successfully",
      data: products,
    });
  }
);

export const getProductById = catchAsync(
  async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: "Product retrieved successfully",
      data: product,
    });
  }
);

export const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.id;
  const deleted = await productService.deleteProductById(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
    data: deleted,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
