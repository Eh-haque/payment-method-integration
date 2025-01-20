import { IProduct } from "./product.interface";
import Product from "./product.model";

async function createProduct(payload: IProduct) {
  const product = Product.create(payload);
  return product;
}

async function getProducts() {
  return await Product.find();
}

async function getProductById(id: string) {
  const product = await Product.findById(id);
  return product;
}

async function deleteProductById(id: string) {
  const product = await Product.findByIdAndDelete(id);
  return product;
}

export const productService = {
  createProduct,
  getProducts,
  getProductById,
  deleteProductById,
};
